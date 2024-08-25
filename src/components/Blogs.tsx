import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // All fetched blogs
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // Blogs after filtering
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const blogsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs.json");
        const data: Blog[] = await response.json();

        // Simulate a delay of 2 seconds before setting the blogs and stopping the loading state
        setTimeout(() => {
          setBlogs(data);
          setFilteredBlogs(data); // Initially, all blogs are shown
          setLoading(false); // Data fetched, set loading to false
        }, 2000); // 2-second delay
      } catch (error) {
        console.error("Failed to fetch:", error);
        setLoading(false); // Error occurred, stop loading
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on the search term
  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [searchTerm, blogs]);

  // Calculate the blogs to display on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="font-mont ">
      <div>
        <h1 className="text-2xl mb-10 mt-40 md:text-4xl lg:text-6xl text-center font-bold">
          Check Out Our Latest Blogs
        </h1>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block mx-auto p-5 mb-5 border-2"
        />
      </div>

      {/* Display skeletons while loading */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-10 p-20">
          {Array.from({ length: blogsPerPage }).map((_, index) => (
            <div
              key={index}
              className="skeleton md:ml-20 lg:ml-5 h-32 w-80 mt-16 p-5 border-b-2"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:m-20  p-20">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="my-5 p-5 border border-gray-300 rounded-lg shadow-lg "
            >
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p>{blog.content}</p>
              <p className="text-sm ">
                Published on: {new Date(blog.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 mb-20 flex justify-center space-x-3">
        {Array.from(
          { length: Math.ceil(filteredBlogs.length / blogsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 border ${
                currentPage === index + 1
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;

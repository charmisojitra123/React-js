import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import FooterWhite from '../components/FooterWhite'
import MainBlog from '../helpers/MainBlog'
import bloggrid1 from '../assets/blog-grid1.jpg'
import bloggrid2 from '../assets/blog-grid2.jpg'
import bloggrid3 from '../assets/blog-grid3.jpg'
import bloggrid4 from '../assets/blog-grid4.jpg'
import bloggrid5 from '../assets/blog-grid5.jpg'
import bloggrid6 from '../assets/blog-grid6.jpg'
import bloggrid7 from '../assets/blog-grid7.jpg'
import bloggrid8 from '../assets/blog-grid8.jpg'

export const blogData = [
  { image: bloggrid1, title: 'The next generation of leather alternatives' },
  { image: bloggrid2, title: 'An Exclusive Clothing Collaboration' },
  { image: bloggrid3, title: 'Hello Fashion by Colombian-American' },
  { image: bloggrid4, title: 'Christine Is A True Style Icon' },
  { image: bloggrid5, title: 'Effortlessly Blends the Carefree Style' },
  { image: bloggrid6, title: 'The Variety of Styles and Prices are Endless' },
  { image: bloggrid7, title: 'Something About This Type of Jeans' },
  { image: bloggrid8, title: 'One of The Most Iconic Fashion Bloggers' },
]

const Blog = () => {
  return (
    <div>
      {/* Inner Banner Section */}
      <InnerBanner innerBannerTile="Blog" innerBannerBreadcrumbs = "Blog"/>

      <div className='containerSection grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-9'>
        {blogData.map((blog, index) => (
          <MainBlog key={index} image={blog.image} title={blog.title} />
        ))}
      </div>

      {/* Footer */}
      <FooterWhite/>

    </div>
  )
}

export default Blog

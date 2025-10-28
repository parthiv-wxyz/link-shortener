import { nanoid } from "nanoid";
import Link from "../models/linkModel.js";

export const createShortLink = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const { originalUrl } = req.body;
    if (!originalUrl)
      return res.status(400).json({ message: "URL is required" });

    const slug = nanoid(6); // generates unique 6-character slug
    
    res.json({ shortUrl: `${process.env.BASE_URL}/${slug}` });
  } catch (error) {
    console.error(error); // log actual error for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  try {
    const { slug } = req.params;
    // const link = await Link.findOne({ where: { slug } });
    // console.log("Link lookup:", slug, link);
const links = await Link.findAll();
console.log('All links:', links);

    if (!link) return res.status(404).json({ message: "Link not found" });

    link.clicks += 1;
    await link.save();

    res.redirect(link.originalUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

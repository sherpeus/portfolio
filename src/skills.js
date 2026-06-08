
const Skills = [
  {
    name: "load-balanced-event-ingestion",
    technology: ["Nginx","Node js","Express js","sqllite3"],
    description:"A high-performance, fault-tolerant log ingestion and analytics pipeline built to demonstrate the principles of horizontal scaling, layer-7 load balancing, and database query optimization.",
    img_url:"",
    available:true,
    link:"https://github.com/sherpeus/load-balanced-event-ingestion",
    difficulty:2
  },
  {
    name: "Melodic",
    technology: ["python", "sqllite3", "pytube", "customtkinter", "pygame", "pyaudio","threading"],
    description: "It is used to download youtube videos for free using its URL. The app converts the video into mp3 and stores it in the database. We can play them later using the app. This was made only for educational purposes. The project is not added to github to avoid ethical issues. Therefore the project link will redirect you to the video where I shows how made the application",
    img_url: "/Images/Melodic.png",
    available: true,
    link: "https://youtu.be/_ZONLz8PPYE?si=-uD5QFG_PYTxfO32",
    difficulty:2
  },
  {
    name:"gpt2-lora-chatbot",
    technology:["Python","Tensorflow","Huggingface ecosystem","GPT2","LLM Finteuning","LORA"],
    description:"A conversational AI project demonstrating parameter-efficient fine-tuning of GPT-2 using LoRA adapters and the Hugging Face ecosystem.",
    img_url:"",
    available:true,
    link:"https://github.com/sherpeus/gpt2-lora-chatbot",
    difficulty:3
  },
  {
    name:"NanoServe",
    technology: ["Python","MySQL","Typer (CLI)"],
    description:"NanoServe is a lightweight, high-performance, and memory-safe Command Line Interface (CLI) utility built in Python designed to handle database diagnostics and automated backups. Instead of relying on heavy corporate software, NanoServe operates close to the system level, using asynchronous streaming and compression to back up massive databases with near-zero memory overhead.",
    img_url:"",
    available:true,
    link:"https://github.com/sherpeus/NanoServe",
    difficulty:3
  },
  {
    name: "Vector database from scratch",
    technology:["python","HNSW Algorithm","DSA"],
    description:"A lightweight, high-performance vector database engine implementing the Hierarchical Navigable Small World (HNSW) algorithm from scratch in pure Python.",
    img_url:"",
    available:true,
    link:"https://github.com/sherpeus/hnsw-from-scratch",
    difficulty:3

  },
  {
    name: "cache-proxy",
    technology: ["Typescript","Express js","Node js"],
    description: "A lightweight, high-performance Command Line Interface (CLI) caching proxy server built with TypeScript, Node.js, and Express.This tool intercepts incoming HTTP requests, forwards them to a specified origin server, caches the responses in memory, and serves subsequent identical requests straight from the cache to drastically reduce latency and network overhead.",
    img_url:"",
    available:true,
    link:"https://github.com/sherpeus/cache-proxy",
    difficulty:2
  },
  {
    name: "Owl",
    technology: ["python","DSA"],
    description: "It’s a basic programming language I built to learn DSA. It supports up to recursion — no fancy data structures.",
    img_url: "/Images/Owl.png",
    available: false,
    link: "",
    difficulty:1
  },
  {
    name: "The Last Run",
    technology: ["javascript", "html", "css"],
    description: "A simple 2D game where the player is chased by zombies. The player has 4 lives and must survive for a minute to win. The user needs to jump over hurdles to avoid capture. Made this to learn JavaScript.",
    img_url: "/Images/The Last Run.png",
    available: false,
    link: "",
    difficulty:0
  },
  {
    name: "Notewave",
    technology: ["react", "firebase", "tailwind"],
    description: "A lightweight web app made for students to collaborate and study. They can form groups, share notes, and have meetings. This is a group project made for fun.",
    img_url: "/Images/NoteWave.png",
    available: true,
    link: "https://github.com/oshankkkk/NoteWave",
    difficulty:2
  },
  {
    name: "Image Compressor",
    technology: ["python", "sk learn"],
    description: "A model that compresses images using unsupervised learning with clustering techniques. Built using scikit-learn.",
    img_url: "",
    available: false,
    link: "",
    difficulty:1
  },
 {
  name: "Habit Pilot",
  technology: ["React", "Python", "Flask"],
  description: "A habit tracking app with a React frontend and Python Flask backend. Generates heatmaps for each habit, helping users visualize and understand their consistency. Built to strengthen my backend skills and connect it seamlessly with the frontend.",
  img_url: "/Images/HabitPilot.png",
  available: true,
  link: "https://github.com/sherpeus/Habit-pilot",
  difficulty:1
},
{
  name: "Mom OS",
  technology:["Python","Rust","Elasticsearch","Tauri"],
  description: "Momos is a real-time behavioural analysis and live nudging system that monitors user activity patterns and intelligently suggests productivity nudges.",
  img_url:"/Images/momOS.png",
  available:true,
  link: "https://github.com/sherpeus/Momos-Production",
  difficulty:4

}

];

export default Skills;

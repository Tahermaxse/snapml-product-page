import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Undetectable from "@/components/Undetectable";
import Usage from "@/components/Usage";

export default function Home() {
  return (
  <>
  <Hero />
  <Features
  title="Snapml platform"
  subtitle="One unified workflow for datasets, experiments, models, deployment, and monitoring."
  features={[
    {
      imageSrc: "./bg.png",
      title: "Unified Workflow",
      description:
        "No MLOps complexity, no setup headaches, and no fragmented tools across your ML lifecycle.",
      imageAlt: "Screen content visualization",
    },
    {
      imageSrc: "./bg.png",
      title: "Dataset Management",
      description:
        "Upload, version, and manage training datasets seamlessly in one place for your entire team.",
      imageAlt: "Meeting audio visualization",
    },
    {
      imageSrc: "./bg.png",
      title: "Experiment Tracking",
      description:
        "Track every ML experiment with automatic logging, side-by-side comparison, and reproducible runs.",
      imageAlt: "Instant response feature",
    },
   
  ]}
/>
  <Manifesto />
  <Undetectable
  title="Everything after training, built in."
  subtitle="Snapml gives your team a fast path from model exploration to stable production operations."
  headerImageSrc="https://cluely.com/_next/static/media/works.2bbce57b.png"
  headerImageAlt="Supported platforms"
  features={[
    {
      title: "Model Playground",
      description:
        "Test, evaluate, and fine-tune models in an interactive playground before promoting them to production.",
      imageSrc: "./bg.png",
      imageAlt: "Doesn’t join meetings-screenshot",
      reverseOrder: false,
    },
    {
      title: "One-Click Deployment",
      description:
        "Deploy models to production in one click with built-in monitoring and API key management.",
      imageSrc: "https://cluely.com/_next/static/media/screen.8c07aba8.png",
      imageAlt: "Invisible to screen-share-screenshot",
      reverseOrder: true,
    },
    {
      title: "Real-time Monitoring",
      description:
        "Track live performance, latency, and usage metrics so your production models stay fast and reliable.",
      imageSrc: "https://cluely.com/_next/static/media/eyes.00797834.png",
      imageAlt: "Follow your eyes-screenshot",
      reverseOrder: false,
    },
  ]}
/>
<Usage
  title="Six ways Snapml powers your ML workflow."
  sections={[
    {
      title: "Unified Workflow",
      description:
        "No MLOps complexity, no setup headaches, no fragmented tools.",
      imageSrc: "https://cluely.com/_next/static/media/meeting.c59aeb79.png",
      imageAlt: "Section 1 image",
    },
    {
      title: "Dataset Management",
      description:
        "Upload, version, and manage your training data seamlessly.",
      imageSrc: "https://cluely.com/_next/static/media/sales.a83b1a9d.png",
      imageAlt: "Section 2 image",
    },
    {
      title: "Experiment Tracking",
      description:
        "Track all your ML experiments with automatic logging and comparison.",
      imageSrc: "https://cluely.com/_next/static/media/deep.b625b59c.png",
      imageAlt: "Section 3 image",
    },
    {
      title: "Model Playground",
      description:
        "Test and fine-tune models in an interactive environment.",
      imageSrc: "https://cluely.com/_next/static/media/meeting.c59aeb79.png",
      imageAlt: "Section 4 image",
    },
    {
      title: "One-Click Deployment",
      description:
        "Deploy models to production with monitoring and API key management.",
      imageSrc: "https://cluely.com/_next/static/media/sales.a83b1a9d.png",
      imageAlt: "Section 5 image",
    },
    {
      title: "Real-time Monitoring",
      description:
        "Track model performance, latency, and usage in production.",
      imageSrc: "https://cluely.com/_next/static/media/deep.b625b59c.png",
      imageAlt: "Section 6 image",
    },
  ]}
/>
<CTA />
  </>
  );
}

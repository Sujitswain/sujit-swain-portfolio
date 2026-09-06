export const profileData = {
  engineer: "Sujit Swain",
  role: "Backend Engineer",
  location: "Bangalore, India",
  specialties: [
    "Distributed systems orchestration",
    "High-throughput API performance tuning",
    "Cloud infrastructure cost optimization"
  ],
  status: "AVAILABLE_FOR_CORE_ROLES"
};

export const stacks = {
  "Languages & Frameworks": [
    "Java (17+)", 
    "Spring Boot", 
    "Spring Security", 
    "Spring Batch", 
    "Python", 
    "JavaScript", 
    "React"
  ],
  "Infrastructure & Cloud": [
    "AWS (EC2, S3, Lambda)", 
    "Docker", 
    "Jenkins", 
    "GitHub Actions",
    "AWS CloudWatch",
    "Kibana"
  ],
  "Persistence & Cache": [
    "MySQL", 
    "Redis Cache Clusters", 
    "JPA / Hibernate Mapping"
  ],
  "Asynchronous Brokers": [
    "Apache Kafka", 
    "Azure Service Bus Pipeline"
  ]
};

export const projects = [
  {
    number: "01",
    title: "Event-Driven Order Processing Infrastructure",
    url: "https://github.com/Sujitswain/Order-Processing-System",
    description: "Architected a highly decoupled distributed microservices ecosystem designed to securely handle and orchestrate heavy transactional ingestion payloads under systemic pressure constraints.",
    accent: "from-cyan-500/20 via-transparent to-transparent",
    borderGlow: "group-hover:border-cyan-500/30",
    features: [
      "Decoupled operational core runtimes using multi-node high-throughput Apache Kafka messaging topologies.",
      "Engineered exact idempotent consumer mechanics to eliminate processing duplication vectors during webhook ingestions.",
      "Deployed strict optimistic record isolation constraints to resolve race conditions over shared inventory database pools.",
      "Integrated secure third-party Stripe checkout handlers backed by automated document verification pipelines using AWS S3 containers."
    ],
    tags: ["Spring Boot", "Kafka Cluster", "Redis Nodes", "MySQL Layer", "AWS S3 Infrastructure"]
  },
  {
    number: "02",
    title: "Distributed Edge API Gateway & Traffic Shaper",
    url: "https://github.com/Sujitswain/Optimus-API-Gateway",
    description: "Designed a low-latency edge routing matrix and access controller layer capable of dynamically enforcing multi-tiered volumetric transaction caps across microservices clusters.",
    accent: "from-indigo-500/20 via-transparent to-transparent",
    borderGlow: "group-hover:border-indigo-500/30",
    features: [
      "Implemented a sub-millisecond centralized Token Bucket algorithm for low-overhead client requests throttling.",
      "Leveraged a shared cluster memory footprint (Redis) to guarantee instant session state validation across modern gateway nodes.",
      "Deployed non-blocking Redis Pub/Sub channels to broadcast live routing metric changes across proxy runtimes without down-time.",
      "Containerized components with multi-stage Docker compilation workflows to dramatically compress bare image envelopes."
    ],
    tags: ["Java 17", "Spring WebFlux", "Redis Shared Memory", "Docker Containerization"]
  }
];

export const ledger = [
  {
    timeline: "Jan 2024 - Present",
    role: "Software Engineer",
    organization: "Capgemini",
    assignment: "Enterprise Backend Core Systems",
    highlights: [
      "Developed high-performance RESTful APIs and decoupled microservices via Spring Boot for core business data workflows.",
      "Engineered multithreaded file-processing pipelines reducing pipeline latency from 10 minutes to 1.2 minutes.",
      "Configured cross-endpoint request tracking wrappers using MDC context mappings with customizable thread decorators.",
      "Hardened software supply chain pipelines and eliminated 50% of outstanding technical debt vulnerabilities through strict SonarQube rule profiles."
    ]
  }
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    year: "2026"
  }
];

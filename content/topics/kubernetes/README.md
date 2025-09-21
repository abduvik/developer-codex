---
title: Kubernetes
---

# Kubernetes

Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized
applications. It consists of several components that work together to provide a complete solution for managing and
deploying applications. Some of the key components of Kubernetes include:

- The Kubernetes master: This is the main control plane for the Kubernetes cluster. It consists of several components,
  such as the API server, which is the main entry point for interacting with the cluster, and the etcd distributed
  key-value store, which stores the cluster's configuration data.

- The Kubernetes nodes: These are the worker machines that run the containerized applications. Each node runs a kubelet,
  which is the agent that communicates with the Kubernetes master and manages the containers on the node.

- The Kubernetes pod: This is the basic unit of deployment in Kubernetes. A pod is a logical host for one or more
  containers, which share the same network namespace and can communicate with each other easily.

- The Kubernetes deployment: This is a higher-level object that manages the deployment and scaling of one or more
  replicas of a pod. The deployment manages the rolling update process, which allows you to update the containers in a
  pod without downtime.

- The Kubernetes service: This is an abstract way to expose the pods to the outside world. A service defines a logical
  set of pods and a policy for accessing them, and it provides a stable IP address and DNS name for the pods.

Read more:

- This is an
  [upcoming full summary on Kubernetes](https://github.com/abduvik/just-enough-series/tree/kubernetes-v1/courses/kubernetes)
  that I am preparing and will make a video for it.

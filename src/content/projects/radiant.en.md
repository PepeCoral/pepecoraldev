---
locale: en
slug: radiant
title: "Radiant"
description: "A medical imaging management platform."
tags:
  - api
  - spring
  - cli
  - python

featured: false
image: "../../assets/projects/radiant/thumbnail.png"
links:
  - url: "https://github.com/radiant-ct/radiant-api"
    card: Backend
    page: Backend on GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
  - url: "https://github.com/radiant-ct/radiant-cli"
    card: CLI
    page: CLI on GitHub
    icon: github
    pageClass: "btn btn-sm btn-neutral"
  - url: "https://pypi.org/project/radiant-ct/"
    card: PyPI
    page: CLI on PyPI
    icon: python
    pageClass: "btn btn-sm btn-secondary"

---

**Radiant** is a platform for the **management and reuse of medical images**, designed for medical imaging professionals and researchers, particularly those working on **machine learning applied to cancer research**.

The project was developed as my **Bachelor's Thesis at the University of Seville**, under the supervision of the **Department of Applied Mathematics I**, and received a **9.4/10**. Development took place as part of a university project in collaboration with **Virgen del Rocío University Hospital**, where the need arose to make it easier to create and reuse datasets for research due to the difficulty of obtaining sufficient data to train machine learning models.

The platform works with medical images in **DICOM** format and allows them to be stored, have their **radiomic features** computed, and be filtered based on both their metadata and these features. Its main goal is to facilitate the **reuse, combination, and creation of datasets**, allowing researchers to build new datasets based on different filtering criteria without modifying or duplicating the original data.

Because operations such as **compression, decompression, and radiomic feature extraction** can be computationally expensive, these tasks are executed **asynchronously**. The system uses a **Redis queue** to manage pending jobs and separate **workers** to process them, preventing the main server operations from being blocked and allowing the workload to be distributed.

One of Radiant's key features is its focus on **dataset reproducibility**. Researchers can create files that describe the contents of a dataset. These files can be shared with other researchers, who can use Radiant to reconstruct exactly the same dataset from the same definition. This means that a dataset is not limited to being a collection of images; it can also be represented as a reproducible description.

To interact with the system, I developed a **command-line client (CLI)** with an interface and set of commands inspired by tools such as **Git**, allowing datasets to be managed and operations to be automated from the terminal. Radiant also provides a **Terminal User Interface (TUI)** for exploring data and building complex filters through an interactive visual interface.

<div style="display: flex; justify-content: center;">
  <img
    src="/assets/projects/radiant/tui.png"
    alt="Terminal User Interface for filtering medical images"
    style="width: 100%; height: auto;"
  />
</div>

The system is designed to support collaboration between researchers by allowing dataset definitions to be shared and subsequently reproduced using the same filtering conditions. This provides a structured way to **create, reuse, combine, and share medical datasets**, making them easier to use in research experiments and in the development of machine learning models for medical imaging.
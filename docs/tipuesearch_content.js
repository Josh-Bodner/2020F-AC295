var tipuesearch = {"pages":[{"title":"Calendars","text":"","tags":"pages","url":"pages/calendars.html"},{"title":"FAQ","text":"General Do I have access to the video recorded materials? Yes. All AC295 students have access to live-streaming and to all the video captured materials. Is there a GitHub repo for the class? Yes. https://github.com/Harvard-IACS/2020F-AC295 Does the individual Exercise (EX) mean I have to submit on my own but can I still work with my HW partner? You are supposed to work on your own, and you should not work with a partner. You can ask questions at Office Hours (OHs) and use all of your materials from the course up to the EX. I am an Extension School Student, can I participate to the forum discussion? And do they count towards my grade? All AC295 students -both Extension and Non-Extension- have access and should participate to the forum discussion. The grades recevied from this activity will count 10% of your final grade. Can I make-up for the forum discussion grade? The forum discussion is an activity that allow the students to solidify the materials tought in class and expand it with readings. Given the importance of this activity, you will not receive extra exercise to compensate poor grade. Project Topic A significant part of this course is a group project. You will work in small teams on a project about a topic of your choosing from those taught in class. You will acquire the data, design, and implement your application using the tools and techniques learned during the course. Auditors Can I audit this course? This course is based on frequent interactions among teaching staff and students. Given the nature of the class and remote teaching, our policy is not to allow auditors.","tags":"pages","url":"pages/faq.html"},{"title":"Projects","text":"Project Topic A significant part of this course is a group project. You will work in small teams on a project about a topic of your choosing from those taught in class. You will acquire the data, design, and implement your application using the tools and techniques learned during the course. Team You will work closely with other classmates in a 3-4 person project team. Team formation will be discussed in class at the beginning of the course. Milestones The project consists of several milestones that need to be submitted on the specified due dates as listed below. Milestone Assignment Due date 1 Project proposal and detailed Scope of Work (SOW) 10/29/2020 2 Reviewed SOW and Kick Off 11/17/2020 3 Mid Project Review and Testing 12/03/2020 4 Final Projects Presentations 12/11/2020 Deliverables Final Deliverables - presentation (due: 12/11) and medium post (due: 12/15) Previous projects You can find some examples of the projects developed by AC295 students during the previous iterations of this course on Medium in the publication curated by the Institute of Applied Computational Science and on the page dedicated to AC295 Projects . Additional AC295 students' Final Projects can be found on Medium in Towards Data Science , the publication specialized in Data Science. Check these links: Image Segmentation Tool , Web Based Transfer Learning Portal .","tags":"pages","url":"pages/projects.html"},{"title":"Resources","text":"GitHub Repo","tags":"pages","url":"pages/resources.html"},{"title":"Schedule","text":"Week Lecture (Tuesday) Lecture (Thursday) Assignment (R:release - D:due) 1 No Class Lecture 1: Introduction: Virtual Enviroments and Virtual Boxes No assignment 2 Lecture 2: Containers Reading Discussion 1 R:EX1 3 Lecture 3: Kubernetes Reading Discussion 2 R:EX2 - D:EX1 4 Lecture 4: Dask Reading Discussion 3 R:EX3 - D:EX2 5 Practicum 1: End to end art search engine Practicum 1 No assignment 6 Lecture 5: Intro to Transfer Learning: basics and CNNs review Reading Discussion 4 R:EX4 - D:EX3 7 Lecture 6: Transfer Learning for Images and SOTA Models Reading Discussion 5 R:EX5 - D:EX4 8 Lecture 7: Language Models and Transfer Learning for Text Reading Discussion 6 R:EX6 - D:EX5 9 Lecture 8: Attention and Transformers Reading Discussion 7 R:EX7 - D:EX6 10 Lecture 9: Distillation and Compression Reading Discussion 8 R:EX8 - D:EX7 11 Practicum 2 Practicum 2 D:EX8 12 Lecture 10: Introduction and Overview of Viz for Deep Models: lime and shapley Lecture 11: CNNs for Image Data, Activation Maximization and Saliency Maps No assignment 13 Lecture 12: Attention for Debugging Language Models No Class: Thanksgiving No assignment 14 Final Project Final Project No assignment 14 Final Project Final Project Presentation No assignment","tags":"pages","url":"pages/schedule.html"},{"title":"Syllabus","text":"Course helpline: ac295f2020@gmail.com Welcome to AC295: advanced practical data science. The course will be divided into three major topics: 1. How to scale a model from a prototype (often in jupyter notebooks) to the cloud. In this module, we cover virtual environments, containers, and virtual machines before learning about containers and Kubernetes. Along the way, students will be exposed to Dask. 2. How to use existing models for transfer learning. Transfer learning is a machine learning method where a model developed for a task is reused as the starting point for a model on a second task. It is a popular approach in deep learning where pre-trained models are used as the starting point on computer vision and natural language processing tasks. This could be very important, given the vast computing resources required to develop neural network models on these problems and the huge gains that these models can provide. In this part of the course, we will examine various pre-existing models and techniques in transfer learning. 3. In the third part, we will introduce several intuitive visualization tools for investigating and diagnosing models. We will be demonstrating a number of visualization tools ranging from the well established (like saliency maps) to recent examples that have appeared in https://distill.pub. Lectures (online): Tuesday and Thursday 10:30-11:45am (and possibly depending on timezone of students repeat Tuesday and Thursday from 6:00-7:15pm) TFs: Rashmi Banthia, William Palmer, Andrea Porelli Office Hours: TBD List of Contents Prerequisites Software Topics Course Activities Resources Assignments Getting Help Course Policies Prerequisites Students are expected to be fluent in programming (Python), statistics knowledge at the level of Stat 110 or above, data science (or machine learning) at the level of AC209A and AC209B. Software We will be using a variety of software, primarily Python 3, Pytorch, Tensorflow, and Docker. More details in class. Topics The course is organized in three modules. Deploy data science (integration + scalability) 1a. Virtual Environments and Virtual Boxes 1b. Containers 1c. Kubernetes 1d. Dask Transfer learning and distillation 2a. Intro to Transfer Learning: basics and Convolutional Neural Networks (CNNs) review 2b. Transfer Learning for Images and SOTA Models 2c. Language Models and Transfer Learning with Text Data 2d. Attention and Transformers 2e. Distillation and Compression Visualization as investigative tool 3a. Introduction and Overview of Viz for Deep Models: lime and shapley 3b. CNNs for Image Data, Activation Maximization and Saliency Maps 3c. Attention for Debugging Language Models Course Activities Each module is structured in three types of activities: Lectures , Reading Discussion , and Practicum . Each activity requires the students to complete different assignments in the form of exercise/homework, discussions, reading assignments, and presentations (see Assignments below). During the first weeks of each module, students will attend a lecture on Tuesday and reading discussion on Thursday. The last week of each module will be Practicum. Attendance is mandatory . Reading List consists of papers, blogs, and other reading material that will be released no later than the beginning of each week. This will be the base for all the activities during the week. See Readings Guidelines here link to guidelines . Lectures are held online Tuesdays from 10:30-11:45am (and possibly depending on timezone of students repeat Tuesday from 6:00-7:15pm). During this activity, we will discuss and summarize the basic concepts of the material covered during the week. Journal Discussions are held online on Thursdays from 10:30-11:45 am (and possibly depending on timezone of students repeat Thursday from 6:00-7:15 pm). During this activity, two groups will present one paper each from the Reading List to the rest of the class and lead the discussion. See Paper Presentation Guidelines here link to guidelines . Practicum are activities in the form of a project based on the material covered in the module. The students will work in groups and be expected to deliver a complete assignment in 10 days. There will be two practicums. Assignments The final grade will be calculated using the following weights for each assignment: Exercises There are eight (8) exercises to complete. They will be released at the end of each regular week Lecture and due a week later. The exercises are graded on a scale 1 to 5, where 5 is the highest grade. Discussion Forum There will be a discussion forum the day before the Reading Discussion on Thursday based on the reading from Reading List . All discussions will be on the Ed Platform (select Ed from the tab on the canvas course's main page). Presentations At every Reading Discussion, groups will present the reading material assigned at the beginning of the week. Please see these on the presentations. Practicums There will be two practica during the first two modules (see the schedule for details). Final Projects There will be a final group project due during Exams period encompassing all the material learned in class. Assignment Final Grade Weight Discussion Forum 10% Exercises 10% Presentations 15% Practicums 40% Final Projects 25% Total 100% Getting Help For questions about exercise, course content, package installation, and after you have tried to troubleshoot yourselves, the process to get help is: Go to Office Hours ; this is the best way to get help. Post the question in Ed Forum , and hopefully, your peers will answer. Course Policies Collaboration Policy We encourage students to talk and discuss the assignments with their fellow students. Discussion is encouraged. Presentation during Reading Discussion, Practicum, and Projects are group activities. Communication from Staff to Students Class announcements will be through Ed Forum . Diversity and Inclusion Statement Data Science, like many fields of science, has historically only been represented by a small portion of the population. This is despite some of the pioneers in computer science being from groups that are historically and presently underrepresented. Whenever possible, I will try to highlight the contributions that people have been from a variety of backgrounds. To start, here is a list of some really nice references.: Ada Lovelace Grace Hopper 7 Black Pioneers in Computer Science I welcome any additions to this list you may have! In an ongoing effort to foster a more inclusive environment in computer science, recent initiatives have attempted to overcome some barriers to entry for underrepresented groups: Made w/ Code Women Driven Development BongoHive Like the list above, this list is not exhaustive, but I welcome any additions and suggestions you may have. I would like to attempt to discuss diversity in data science from time to time where appropriate and possible. Please contact me (in person or electronically) or submit anonymous feedback if you have any suggestions to improve the quality of the course materials. The best way to provide anonymous feedback is to use Ed, which allows you to provide comments anonymously. Furthermore, I would like to create a learning environment for my students that supports a diversity of thoughts, perspectives and experiences, and honors your identities (including race, gender, class, sexuality, religion, ability, etc.) To help accomplish this: If you have a name and/or set of pronouns that differ from those that appear in your official Harvard records, please let me know! If you feel like your performance in the class is being impacted by your experiences outside of class, please don't hesitate to come and talk with me. I want to be a resource for you. Remember that you can also submit anonymous feedback (which will lead to me making a general announcement to the class if necessary to address your concerns). If you prefer to speak with someone outside of the course, you may find helpful resources at the Harvard Office of Diversity and Inclusion. I (like many people) am still in the process of learning about diverse perspectives and identities. If something was said in class (by anyone) that made you feel uncomfortable, please talk to me about it. (Again, anonymous feedback is always an option.) As a participant in course discussions, you should also strive to honor the diversity of your classmates. Academic Honesty Ethical behavior is an important trait of a Data Scientist, from ethically handling data to attribution of code and work of others. Thus, in AC295 we give a strong emphasis to Academic Honesty. As a student your best guidelines are to be reasonable and fair. We encourage teamwork for problem sets, but you should not split the assignments and you should work on all the problems together. Accommodations for students with disabilities Students needing academic adjustments or accommodations because of a documented disability must present their Faculty Letter from the Accessible Education Office (AEO) and speak with Pavlos by the end of the third week of the term: Friday, September 18. Failure to do so may result in us being unable to respond in a timely manner. All discussions will remain confidential. Accommodations for students with disabilities Previous Material 2020 Spring","tags":"pages","url":"pages/syllabus.html"},{"title":"Reading Discussion 2","text":"READING DISCUSSION 2: Kubernetes [9/10 not a complete list] Expository Kubernetes 101 Kubernetes Architecture 101 The Kubernetes Bible for Beginners & Developers Kubeflow Benefits of Kubernetes Why Kubernetes is a Considerable Step Forward in Software Products Development? Local Kubernetes Development Containers and Cloud: From LXC to Docker to Kubernetes Longer Reads PDF available through Canvas | Kubernetes: Up and Running - This is a book - Any two chapters Helm, The package manager for Kubernetes Use case and other interesting reads Skaffold Loft [LOFT Kubernetes Virtual Clusters as Development Environments] (https://loft.sh/blog/kubernetes-virtual-clusters-as-development-environments/) Virtual Cluster | Sandboxes for ML experiment Antifragility in Kubernetes","tags":"readings","url":"readings/reading2/"},{"title":"Lecture 2: Containers","text":"Slides Lecture 2: Virtual Environments, Virtual Machines, and Containers | PDF Lecture 2: Virtual Environments, Virtual Machines, and Containers | PPTX Demo Demo 1: Getting started with dockers Demo 2: Web-db dockerized Files syllabus.txt hello_world_server.py hello_world_db.py Dockerfile_db Dockerfile_server","tags":"lectures","url":"lectures/lecture2/"},{"title":"Lecture 1: Introduction: Virtual Enviroments and Virtual Boxes","text":"Slides Lecture 1: Introduction | PDF Lecture 1: Introduction | PPTX","tags":"lectures","url":"lectures/lecture1/"},{"title":"Reading Discussion 1","text":"Selected Readings Virtual Environments Expository Getting Started with Python Virtual Environments - Venv Getting started with Python Virtual Environments using Conda: Why Getting started with Python Virtual Environments using Conda: How Virtual Machines Expository How to Install a Windows 10 on Your Mac Enable Virtual Machines in Windows 10 Dockers Expository Make Code Accessible with these Cloud Services Install Dockers on Windows 10 Home Dockers Getting Started Docker Best Practices Docker WorkShop for Beginners Docker Labs Software Development with Docker Research * Docker: Lightweight Linux Containers for Consistent Development and Deployment Comparison of different Linux containers Singularity: Scientific containers for mobility of compute Use Cases: Dockers in a real setting * The BinderHub Architecture Explained DIY: Build your Binder Client/Server-Side Application Next presentations, select from Research or Use Cases","tags":"readings","url":"readings/reading1/"},{"title":"Lecture 11: CNNs for Image Data, Activation Maximization and Saliency Maps","text":"Slides","tags":"lectures","url":"lectures/lecture11/"},{"title":"Lecture 12: Attention for Debugging Language Models","text":"Slides PDF | Lecture 12: Attention for Debugging Language Models","tags":"lectures","url":"lectures/lecture12/"},{"title":"Reading Discussion 9: Recurrent Neural Networks for Text Data","text":"Selected Readings Expository Research","tags":"readings","url":"readings/reading9/"},{"title":"Reading Discussion 8: Convolutional Neural Networks for Image Data","text":"Selected Readings Expository Research","tags":"readings","url":"readings/reading8/"},{"title":"Reading Discussion 6: Distillation and Compression","text":"Selected Readings Expository Research Resources","tags":"readings","url":"readings/reading6/"},{"title":"Reading Discussion 7: Introduction and Overview of Viz for Deep Models","text":"Selected Readings Expository Research","tags":"readings","url":"readings/reading7/"},{"title":"Reading Discussion 5: Transfer Learning across Tasks","text":"Selected Readings Expository Research","tags":"readings","url":"readings/reading5/"},{"title":"Journal Discussion: Transfer Learning (Statistical approaches to Transfer Learning)","text":"Selected Readings Expository Research TBD","tags":"readings","url":"readings/reading4/"},{"title":"Reading Discussion 3: Dask","text":"Selected Readings Expository Research","tags":"readings","url":"readings/reading3/"},{"title":"Lecture 10: Language Models","text":"Slides Colab Notebooks","tags":"lectures","url":"lectures/lecture10/"},{"title":"Lecture 3: Kubernetes","text":"Slides","tags":"lectures","url":"lectures/lecture3/"},{"title":"Lecture 4: Dask","text":"Slides Jupyter Notebooks Data","tags":"lectures","url":"lectures/lecture4/"},{"title":"Lecture 5: Intro to Transfer Learning","text":"Slides","tags":"lectures","url":"lectures/lecture5/"},{"title":"Lecture 6: Transfer Learning 2","text":"Jupyter Notebooks","tags":"lectures","url":"lectures/lecture6/"},{"title":"Lecture 7: Distillation and Compression","text":"Jupyter Notebooks","tags":"lectures","url":"lectures/lecture7/"},{"title":"Lecture 8: Introduction and overview of Viz for Deep Models","text":"Slides Jupyter Notebooks Colab Hands-On","tags":"lectures","url":"lectures/lecture8/"},{"title":"Lecture 9: Convolutional Neural Networks for Image Data","text":"Colab Notebook","tags":"lectures","url":"lectures/lecture9/"},{"title":"Practicum 1: Title","text":"Problem Set","tags":"practicums","url":"practicums/practicum1/"},{"title":"Practicum 2","text":"Problem Set 2 Data 2 Resources","tags":"practicums","url":"practicums/practicum2/"},{"title":"Resource","text":"Forms Form: Make Group Form: Sign Up Presentation","tags":"resources","url":"resources/resource1/"},{"title":"Use Case 1: Dockers in a real setting","text":"Expository 8 Proven Real-World Ways to Use Docker Best of 2018: 5 Interesting Docker Use Cases","tags":"readings","url":"readings/use-case1/"},{"title":"Use Case 2: Kubernetes in a real setting","text":"Expository title","tags":"readings","url":"readings/use-case2/"},{"title":"Use Case 3: Dask in a real setting","text":"Expository title","tags":"readings","url":"readings/use-case3/"},{"title":"Topics in Applied Computation: Advanced Practical Data Science","text":"Fall 2020 Pavlos Protopapas Office Hours: Thursdays 8:00 - 9:30 PM EST (Office hours begin 09/08) FAQ Can I audit this course? This course is based on frequent interactions among teaching staff and students. Given the nature of the class and remote teaching, our policy is not to allow auditors. Course helpline: ac295f2020@gmail.com Welcome to AC295: advanced practical data science. The course will be divided into three major topics: 1. How to scale a model from a prototype (often in jupyter notebooks) to the cloud. In this module, we cover virtual environments, containers, and virtual machines before learning about containers and Kubernetes. Along the way, students will be exposed to Dask. 2. How to use existing models for transfer learning. Transfer learning is a machine learning method where a model developed for a task is reused as the starting point for a model on a second task. It is a popular approach in deep learning where pre-trained models are used as the starting point on computer vision and natural language processing tasks. This could be very important, given the vast computing resources required to develop neural network models on these problems and the huge gains that these models can provide. In this part of the course, we will examine various pre-existing models and techniques in transfer learning. 3. In the third part, we will introduce several intuitive visualization tools for investigating and diagnosing models. We will be demonstrating a number of visualization tools ranging from the well established (like saliency maps) to recent examples that have appeared in https://distill.pub. Lectures (online): Tuesday and Thursday 10:30-11:45am (and possibly depending on timezone of students repeat Tuesday and Thursday from 6:00-7:15pm) Office Hours: (all times EST) (Office hours begin 09/08) TF Day Office Hours William Palmer Sunday 10:00-11:30 AM Shivas Jayaram Sunday 8:00 - 9:30 PM Hai Bui Wednesday 11:00 AM - 12:30 PM Javid Lakha Wednesday 4:30 - 6:00 PM Andrea Porelli Thursday 1:00 -2:30 PM Rashmi Banthia Friday 8:30-10:00 AM Yujiao Chen Saturday 11:00 AM - 12:30 PM Previous Material 2020 Spring","tags":"pages","url":"pages/topics-in-applied-computation-advanced-practical-data-science/"}]}
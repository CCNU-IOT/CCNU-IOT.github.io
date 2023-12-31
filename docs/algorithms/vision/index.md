# 物联网协会视觉组

作者：计算机视觉小组:camera:

## 1.成员：

- 负责人:camera_flash: ：**王庆焱**
- 小组成员:camera_flash: ：**汤琪**
- 小组成员:camera_flash: ：**曾远霞**

## 2.计算机视觉介绍：

### 2.1 什么是计算机视觉：

- **计算机视觉**:ghost:：
  - 图像和视频处理：计算机视觉通过对图像和视频进行处理，包括图像获取、预处理、分割、特征提取等，以使计算机能够有效地理解视觉信息。
  - 特征提取和模式识别：计算机视觉使用各种算法和技术来提取图像中的特征，例如边缘、颜色、纹理等，并将这些特征用于识别和分类对象、场景或模式。
- **简单理解**:thinking:：
  - 简而言之，计算机视觉使计算机可以"看懂"图像和视频。

- ![How to Double YOLOv5 Performance in Less Than 15 Minutes | Deci](https://deci.ai/wp-content/uploads/2021/04/YOLOv5-image-GitHub.jpeg)

### 2.2 物联网协会的计算机视觉组都做什么：

- **目标检测**:bicyclist:：
  - **YOLO**系列模型是容易上手、适合入门的深度学习模型。
  - YOLO模型可以识别出图像或视频中的目标，并常被用于二次开发新应用，如获取摄像头实时视频流并处理，然后通过UDP形式转发给客户端。
- **立体视觉**:monkey:：
  - 通过使用双目相机来捕捉同一场景的图像，并通过比较这些图像中的特征点或像素来计算物体的深度和距离，可进一步用于三维重建。
    - 相机标定：双目相机系统中的两个摄像头具有不同的内部参数（例如，焦距、主点位置），因此需要进行双目标定，以确定它们之间的几何关系。
    - 双目校正：通过校正，以确保左右摄像头的像素在水平线上对齐。
    - 立体匹配：用于找到左右图像中对应点之间的视差，视差表示了一个像素在两个摄像头之间的偏移量，通过比较两个图像中的像素，可以找到匹配的点对，从而计算视差信息。
    - 深度信息：利用视差信息和已知的相机参数，可以使用三角法或其他几何方法来估计物体到相机的深度信息。通过深度信息可以获取场景中每个像素与相机的距离值。
- **Linux**:computer:：
  - Linux是一个强大、灵活、免费的操作系统，被广泛用于各种领域，从个人电脑到服务器和嵌入式系统。它的开放性和多样性使其成为计算领域中的一个重要力量，也为用户提供了广泛的选择和控制权。
  - 部署的许多服务都需要放到服务器上，而服务器一般而言都是采用linux系统，所以学习linux指令非常有必要。
  - 学习Linux命令可以增加对计算机底层运行的了解，以及对操作系统和计算机体系结构的理解。


## 3.开发环境：

- **Pycharm**:cat:：
  - PyCharm是一个强大且广泛使用的Python开发工具，适用于各种Python项目，从简单的脚本到大规模的Web应用程序和数据科学项目。它提供了一套完整的工具，可帮助Python开发人员提高生产力并更轻松地开发高质量的Python代码。
- **CLion**:cat2:：
  - CLion是一个面向C和C++开发人员的高效工具，旨在提高他们的工作效率和代码质量。它提供了一套全面的工具，帮助开发人员编写、调试和管理复杂的C/C++项目，并且适用于各种应用领域，包括系统编程、嵌入式开发、游戏开发和科学计算等。
- **Ubuntu22.04**:racehorse:：
  - 算法开发与部署必不可少的Linux系统，算法组开发都基于Ubuntu22.04。

## 4.开发语言：

- **Python/AscendCL/C++**

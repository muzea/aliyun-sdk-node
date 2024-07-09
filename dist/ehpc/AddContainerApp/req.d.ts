export interface AddContainerAppRequest {
    /**
     * 容器名称。长度为2~64个字符，必须以字母开头，可以包含字母、数字、短划线（-）和下划线（_） 。
     * @example `container1`
     */
    "Name": string;
    /**
     * 获取Docker Hub中与仓库名称同名的镜像。
     * 具体镜像名请参见[Docker Hub镜像](https://hub.docker.com/search?q=&type=image)。
     * @example `repo1`
     */
    "Repository": string;
    /**
     * 容器描述。
     * @example `descriptionContainer`
     */
    "Description"?: string;
    /**
     * 镜像的标签。
     * 镜像仓库中会存放一类镜像，例如Ubuntu，标签用于区分一类镜像中不同的镜像文件，例如16.04、17.04、latest。
     * 默认值：latest
     * @example `latest`
     */
    "ImageTag"?: string;
    /**
     * 容器类型。 固定值：singularity
     * @example `singularity`
     */
    "ContainerType"?: string;
}

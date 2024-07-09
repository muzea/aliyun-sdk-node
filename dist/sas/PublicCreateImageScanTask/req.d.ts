export interface PublicCreateImageScanTaskRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168..XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 镜像仓的类型。多个镜像仓的类型之间使用半角逗号（,）分隔。取值：
     * - **acr**
     * - **harbor**
     * - **quay**
     * @example `acr`
     */
    "RegistryTypes"?: string;
    /**
     * 镜像的地域ID。多个地域ID之间使用半角逗号（,）分隔。
     * @example `cn-hangzhou`
     */
    "RegionIds"?: string;
    /**
     * ACR镜像仓实例的ID。多个实例的ID之间使用半角逗号（,）分隔。
     * @example `i-uf6j8vq9l4r5ntht****`
     */
    "InstanceIds"?: string;
    /**
     * 镜像仓的命名空间。多个命名空间之间使用半角逗号（,）分隔。
     * @example `hanghai-namespace`
     */
    "RepoNamespaces"?: string;
    /**
     * 镜像仓的ID。多个镜像仓的ID之间使用半角逗号（,）分隔。
     * @example `crr-vridcl4****`
     */
    "RepoIds"?: string;
    /**
     * 镜像仓的名称。多个镜像仓的名称之间使用半角逗号（,）分隔。
     * @example `centos`
     */
    "RepoNames"?: string;
    /**
     * 镜像的摘要的SHA256值。多个摘要的SHA256值之间使用半角逗号（,）分隔。
     * @example `6a5e103187b31a94592a47a5858617f7a6c`
     */
    "Digests"?: string;
    /**
     * 镜像的标签。多个标签之间使用半角逗号（,）分隔。
     * @example `0.2`
     */
    "Tags"?: string;
}

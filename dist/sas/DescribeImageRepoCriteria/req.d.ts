export interface DescribeImageRepoCriteriaRequest {
    /**
     * 镜像仓库检索值。
     * > 该参数支持镜像ID、tag、镜像实例ID、镜像仓名称、镜像仓命名空间、镜像仓ID、镜像仓地域、digest、镜像仓库的类型的模糊搜索。
     * @example `2.0.2`
     */
    "Value"?: string;
}

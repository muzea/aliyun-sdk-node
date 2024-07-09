export interface DescribeImageCriteriaRequest {
    /**
     * 查询镜像时输入的模糊匹配值。
     * > 该参数支持镜像ID、镜像标签、镜像实例ID、镜像仓名称、镜像仓ID、镜像仓命名空间、镜像地域、镜像digest、镜像仓类型的模糊查询。
     * @example `525`
     */
    "Value"?: string;
}

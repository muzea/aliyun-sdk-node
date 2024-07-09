export interface ListInterceptionTargetPageRequest {
    /**
     * 网络对象名称。
     * @example `source-test-obj-0****
    `
     */
    "TargetName"?: string;
    /**
     * 对象类型。取值：
     * - IMAGE：镜像
     * @example `IMAGE
    `
     */
    "TargetType"?: string;
    /**
     * 网络对象所在命名空间。
     * @example `default
    `
     */
    "Namespace"?: string;
    /**
     * 网络对象的应用名称。
     * @example `frontend`
     */
    "AppName"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 网络对象包含的镜像列表。
     */
    "ImageList"?: string[];
    /**
     * 网络对象包含的标签列表。
     */
    "TagList"?: string[];
}

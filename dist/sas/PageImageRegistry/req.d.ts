export interface PageImageRegistryRequest {
    /**
     * 镜像仓类型列表。
     */
    "RegistryTypeInList"?: string[];
    /**
     * 不包含的镜像仓类型列表。
     */
    "RegistryTypeNotInList"?: string[];
    /**
     * 镜像仓名称，模糊匹配。
     * @example `asa`
     */
    "RegistryNameLike"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 访问源IP地址。
     * @example `140.207.XXX.XXX`
     */
    "SourceIp"?: string;
}

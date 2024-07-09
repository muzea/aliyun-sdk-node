export interface DescribeDirQuotasRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 目录在文件系统中的绝对路径。
     * 此项为空时会返回文件系统中全部已设置了配额的目录。
     * @example `/data/sub1`
     */
    "Path"?: string;
    /**
     * 每个分页包含的目录个数。默认值为10。
     * 取值范围：1~100。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 分页页码。
     * 起始值（默认值）：1。
     * @example `1`
     */
    "PageNumber"?: number;
}

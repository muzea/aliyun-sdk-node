export interface ListOSSHDFSExportsRequest {
    /**
     * Project名称
     * @example `my-project
    `
     */
    "project": string;
    /**
     * 查询开始行，默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 查询结束行，默认值为100。
     * @example `100`
     */
    "size"?: number;
    "logstore"?: string;
}

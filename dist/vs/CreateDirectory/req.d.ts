export interface CreateDirectoryRequest {
    /**
     * 目录名称。
     * @example `目录1`
     */
    "Name": string;
    /**
     * 目录描述。
     * @example `目录1`
     */
    "Description"?: string;
    /**
     * 目录所属空间ID。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId": string;
    /**
     * 上级目录ID。
     * > 创建设备空间时会默认创建空间对应的根目录，可通过 [DescribeDirectories](https://next.api.aliyun.com/document/vs/2018-12-12/DescribeDirectories) 接口查询对应根目录。
     * @example `399*****774-cn-qingdao`
     */
    "ParentId": string;
}

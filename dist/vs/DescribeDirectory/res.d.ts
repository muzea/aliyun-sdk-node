export interface DescribeDirectoryResponse {
    /**
     * 上级目录ID。
     * @example `399*****774-cn-qingdao`
     */
    ParentId: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 目录描述。
     * @example `目录1`
     */
    Description: string;
    /**
     * 目录所属空间ID。
     * @example `348*****174-cn-qingdao`
     */
    GroupId: string;
    /**
     * 目录名称。
     * @example `目录1`
     */
    Name: string;
    /**
     * 目录创建时间。
     * @example `2021-09-10T10:00:00Z`
     */
    CreatedTime: string;
    /**
     * 目录ID。
     * @example `399*****488-cn-qingdao`
     */
    Id: string;
}

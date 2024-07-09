export interface DescribeDirectoriesResponse {
    /**
     * 第几个分页。
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 空间总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 目录列表。
     */
    Directories: {
        /**
         * 上级目录ID。
         * @example `399*****774-cn-qingdao`
         */
        ParentId: string;
        /**
         * 目录描述。
         * @example `目录2`
         */
        Description: string;
        /**
         * 目录所属空间ID。
         * @example `348*****174-cn-qingdao`
         */
        GroupId: string;
        /**
         * 目录名称。
         * @example `目录2`
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
    }[];
}

export interface ModifyDirectoryRequest {
    /**
     * 目录ID。
     * @example `399*****488-cn-qingdao`
     */
    "Id": string;
    /**
     * 目录名称。
     * @example `目录2`
     */
    "Name"?: string;
    /**
     * 目录描述。
     * @example `目录2`
     */
    "Description"?: string;
}

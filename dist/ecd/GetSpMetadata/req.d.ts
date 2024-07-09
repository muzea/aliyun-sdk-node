export interface GetSpMetadataRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区ID，与`OfficeSiteId`含义相同。建议停止使用`DirectoryId`，改为使用`OfficeSiteId`。`DirectoryId`和`OfficeSiteId`只能填写一个，不可同时填写。
     * @example `cn-hangzhou+dir-400695****`
     */
    "DirectoryId"?: string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-400695****`
     */
    "OfficeSiteId"?: string;
}

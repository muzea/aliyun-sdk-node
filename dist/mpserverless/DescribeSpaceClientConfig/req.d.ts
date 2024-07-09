export interface DescribeSpaceClientConfigRequest {
    /**
     * 服务空间ID。
     * @example `226e5213-697c-4a52-b4ff-35a09f8*****`
     */
    "SpaceId"?: string;
    /**
     * 是否返回详细信息，默认为false。
     * @example `true`
     */
    "Detail"?: string;
    /**
     * 工作空间ID
     * @example `211975XXXX`
     */
    "WorkspaceId"?: number;
}

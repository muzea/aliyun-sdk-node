export interface AddMembersRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 工作空间ID。
         * @example `w-975bcfda9625****`
         */
        workspaceId: string;
        memberArns: string[];
    };
    /**
     * 区域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}

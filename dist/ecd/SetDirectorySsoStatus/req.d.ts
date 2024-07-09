export interface SetDirectorySsoStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AD目录ID。
     * @example `cn-hangzhou+dir-h95efs1mbukd9****`
     */
    "DirectoryId": string;
    /**
     * 是否开启SSO。取值范围：
     * - true：开启
     * - false：关闭
     * @example `true`
     */
    "EnableSso": boolean;
}

export interface GetDeploymentBySelectorResponse {
    /**
     * 请求ID
     * @example `946690C2-41D3-55A0-A501-E2FFAB5F8C24`
     */
    RequestId: string;
    /**
     * 工作负载名称列表
     */
    DeploymentNameList: string[];
    /**
     * 本次返回的数据结束标记
     * @example `eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6NTgyMDUzMzk5MCwic3RhcnQiOiJwbXMtYWRhcHRlci1kZGxsXHUwMDAwIn0`
     */
    Mark: string;
}

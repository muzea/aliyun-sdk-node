export interface DeleteAppListRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ARMS应用监控实例ID（即PID）列表。
     */
    "Pids": string[];
}

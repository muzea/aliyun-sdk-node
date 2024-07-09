export interface AllocateDedicatedHostsResponse {
    /**
     * 请求ID。
     * @example `E2A664A6-2933-4C64-88AE-5033D003****`
     */
    RequestId: string;
    DedicatedHostIdSets: {
        /**
         * 专有宿主机ID（DedicatedHostId）组成的列表。
         */
        DedicatedHostId: string[];
    };
}

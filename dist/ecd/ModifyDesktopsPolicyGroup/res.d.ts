export interface ModifyDesktopsPolicyGroupResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 修改结果的集合。
     */
    ModifyResults: {
        /**
         * 修改结果。返回success表示成功，否则将返回错误信息。
         * @example `success`
         */
        Code: string;
        /**
         * 错误信息。当Code为`success`时，不返回该参数。
         * @example `The specified param DesktopId ecd-ia2zw38bi6cm7**** is not found.`
         */
        Message: string;
        /**
         * 云桌面ID。
         * @example `ecd-7w78ozhjcwa3u****`
         */
        DesktopId: string;
    }[];
}

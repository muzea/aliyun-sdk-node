export interface GetNamespaceDataResponse {
    /**
     * 请求ID
     * @example `E94C9864-56FB-44AD-AC0C-A1CEFB332254`
     */
    RequestId: string;
    /**
     * Namespace里的数据
     * @example `[{\"path\":\"/\",\"content\":\"Window\",\"children\":[{\"path\":\"/Window\",\"content\":\"SunroofSlideCtrl\",\"children\":[{\"path\":\"/Window/SunroofSlideCtrl\",\"content\":\"val\",\"children\":[{\"path\":\"/Window/SunroofSlideCtrl/val\",\"content\":\"3\"}]}]},{\"path\":\"/Window\",\"content\":\"SunroofTiltCtrl\",\"children\":[{\"path\":\"/Window/SunroofTiltCtrl\",\"content\":\"val\",\"children\":[{\"path\":\"/Window/SunroofTiltCtrl/val\",\"content\":\"1\"}]}]}]}]`
     */
    Data: string;
}

export interface DeltaGetLastCursorRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 同步文件夹根节点文件id
         * @example `622fb09598ae66777c7040109a16f49381f6abe1`
         */
        sync_root_id: string;
    };
}

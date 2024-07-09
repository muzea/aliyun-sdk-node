export interface CreateLiveRecordSliceFileResponse {
    /**
     * 请求ID。
     * @example `ER52****O9CA`
     */
    RequestId: string;
    /**
     * 创建场景化直播返回的结果。
     */
    Result: {
        /**
         * 片段录制文件的地址。
         * @example `http://demo-app-playback.com/**.m3u8?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        SliceRecordUrl: string;
    };
}

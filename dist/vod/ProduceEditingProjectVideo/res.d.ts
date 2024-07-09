export interface ProduceEditingProjectVideoResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 合成的视频ID。
     * > - 视频合成接口同步返回合成的视频ID。
     * > - 接口返回MediaId，表示视频合成已进入异步处理阶段。
     * @example `006204a11bb386bb25491f95f****`
     */
    MediaId: string;
    /**
     * 云剪辑工程ID。
     * @example `fb2101bf24b4cb318787dc****`
     */
    ProjectId: string;
}

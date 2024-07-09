export interface DeleteMezzaninesResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 不可删除的音/视频ID列表。
     * > 一般由于源文件作为原画（当视频转码模式为不转码或异步转码时，源文件会作为原画用于播放，默认不可删除该视频的源文件）或无[权限](~~113600~~)导致。
     */
    UnRemoveableVideoIds: string[];
    /**
     * 不存在的音/视频ID列表。
     */
    NonExistVideoIds: string[];
}

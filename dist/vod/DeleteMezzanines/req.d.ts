interface DeleteMezzaninesRequest {
    "RegionId"?: string;
    /**
    * 视频ID列表。一次最多支持20个视频ID，多个用逗号分隔。
    * @example `23ab850b4f6f44eab54b6e91d24d8157,93ab850b4f6f44eab54b6e91d24d81d4`
    */ "VideoIds": string;
    "OwnerId"?: number;
    /**
    * 强制删除源文件，默认为**false**。
    * > 当视频转码模式为不转码，即分发或异步转码时，由于源文件会作为原画用于播放，默认不可删除该视频的源文件，若需要强制删除该视频的源文件，可将值置为**true**。
    * @example `false`
    */ "Force"?: boolean;
}
export { DeleteMezzaninesRequest };
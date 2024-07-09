export interface GenerateVideoPlaylistResponse {
    /**
     * 请求ID。
     * @example `CA995EFD-083D-4F40-BE8A-BDF75FFF*****`
     */
    RequestId: string;
    /**
     * 输出视频总时长。
     * @example `1082`
     */
    Duration: number;
    /**
     * Master Playlist的Token。
     * @example `92376fbb-171f-4259-913f-705f7ee0****`
     */
    Token: string;
    /**
     * Master Playlist的OSS地址。
     * @example `oss://test-bucket/test-object/master.m3u8`
     */
    MasterURI: string;
    /**
     * 视频Media Playlist文件列表。
     */
    VideoPlaylist: {
        /**
         * 视频Media Playlist生成的Token。可以使用该参数组装成ts文件生成的地址。
         * >  根据返回的Token值，可以拼接出转码生成的ts地址。拼接格式为：oss://${Bucket}/${Object}-${Token}-${Index}.ts，其中oss://${Bucket}/${Object}为输入参数的Target URI地址，${Token}为返回的参数，${Index}为ts的序号。
         * @example `affe0c6042f09722fec95a21b8b******`
         */
        Token: string;
        /**
         * 视频Media Playlist的OSS地址。
         * @example `oss://test-bucket/test-object/output-video.m3u8`
         */
        URI: string;
        /**
         * 视频分辨率。
         * @example `640x480`
         */
        Resolution: string;
        /**
         * 视频帧率。
         * @example `25/1`
         */
        FrameRate: string;
    }[];
    /**
     * 音频Media Playlist文件列表。
     */
    AudioPlaylist: {
        /**
         * 音频Media Playlist生成的Token。可以使用该参数组装成ts文件生成的地址。
         * @example `affe0c6042f09722fec95a21b8b******`
         */
        Token: string;
        /**
         * 音频Media Playlist的OSS地址。
         * @example `oss://test-bucket/test-object/output-audio.m3u8`
         */
        URI: string;
        /**
         * 音频声道数量。
         * @example `1`
         */
        Channels: number;
    }[];
    /**
     * 字幕Media Playlist文件列表。
     */
    SubtitlePlaylist: {
        /**
         * 字幕Media Playlist生成的Token。可以使用该参数组装成字幕文件生成的地址。
         * >  根据返回的Token值，可以拼接出转码生成的字幕文件地址。拼接格式为：oss://${Bucket}/${Object}-${Token}_${Index}.ts，其中oss://${Bucket}/${Object}为输入参数的Subtitle URI地址，${Token}为返回的参数，${Index}为字幕的序号。
         * @example `affe0c6042f09722fec95a21b8b******`
         */
        Token: string;
        /**
         * 字幕Media Playlist的OSS地址。
         * @example `oss://test-bucket/test-object/output-subtitle.m3u8`
         */
        URI: string;
        /**
         * 字幕流的语言。
         * > 语言来源于SourceURI源视频的字幕流信息。如果源视频不存在语言信息，返回空值。
         * @example `eng`
         */
        Language: string;
        /**
         * 字幕流编号，从0开始。
         * @example `1`
         */
        Index: number;
    }[];
}

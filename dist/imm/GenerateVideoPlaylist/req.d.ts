export interface GenerateVideoPlaylistRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 用户自定义信息，在异步消息通知中会返回，方便您在系统内对消息通知进行关联处理。最大长度为 2048 字节。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    "UserData"?: string;
    /**
     * 视频的OSS地址。
     * OSS 地址规则为oss://${Bucket}/${Object}，其中${Bucket}为和当前项目处于同一区域(Region)的 OSS Bucket 名称，${Object}为包含文件扩展名的文件完整路径。
     * > 只支持OSS标准存储Bucket。
     * > 不支持设置了防盗链白名单访问bucket。
     * @example `oss://test-bucket/test-source-object/video.mp4`
     */
    "SourceURI": string;
    /**
     * 生成播放列表的起始时间点，单位为秒（s）。取值范围如下：
     * - 0（默认）或不填表示从源视频起始时间点开始。
     * - 大于0表示从源视频所设置的时间点开始。
     * >通过与参数**SourceDuration**一同设置可以对源视频的部分内容生成播放列表。
     * @example `0`
     */
    "SourceStartTime"?: number;
    /**
     * 生成播放列表的持续时间。单位为秒（s），取值范围如下：
     * - 0（默认）或不填表示持续到源视频结尾。
     * - 大于0表示从生成播放列表的起始时间点持续所设置的时长。
     * > 当设定参数所对应的时间点超过源视频结尾时按默认值处理。
     * @example `0`
     */
    "SourceDuration"?: number;
    /**
     * 添加字幕列表，默认为空。最大支持2个。
     */
    "SourceSubtitles"?: {
        /**
         * 被嵌入字幕的OSS地址。
         * OSS地址规则为oss://${Bucket}/${Object}，其中${Bucket}为和当前项目处于同一区域(Region)的OSS Bucket名称，${Object}为文件的完整路径。
         * > 参数**MasterURI**必须不为空，并且被嵌入字幕的OSS地址`oss://${Bucket}/${Object}`必须处于参数**MasterURI**所在目录或它的子目录。
         * @example `oss://test-bucket/test-object/subtitle/eng.vtt`
         */
        URI: string;
        /**
         * 字幕语言，参考标准为 ISO 639-2，默认为空。
         * @example `eng`
         */
        Language: string;
    }[];
    /**
     * Master Playlist的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中${Bucket}为和当前项目处于同一区域(Region)的OSS Bucket名称，${Object}为带".m3u8"后缀名的文件完整路径。
     * > 如果Playlist有字幕输入或有多Target输出，MasterURI为必填，并且字幕URI或Target URI必须处于MasterURI所在目录或子目录。
     * @example `oss://test-bucket/test-object/master.m3u8`
     */
    "MasterURI"?: string;
    /**
     * 边转边播播放列表数组，数组长度最大为6。每个Target对应至多一个视频Media Playlist和一个或多个字幕Media Playlist
     * > 如果配置了大于一个Target，参数**MasterURI**必须不为空。
     */
    "Targets": {
        /**
         * 边转边播输出文件的OSS地址前缀，输出文件包括m3u8文件和ts文件。
         * OSS地址规则为oss://${Bucket}/${Object}，其中${Bucket}为和当前项目处于同一地域的OSS Bucket名称，${Object}为不包含文件扩展名的文件完整路径前缀。
         * - 示例：URI为oss://test-bucket/test-object/output-video，则将产生一个oss://test-bucket/test-object/output-video.m3u8文件以及多个oss://test-bucket/test-object/output-video-${token}-${index}.ts文件，其中${token}为根据转码参数生成的唯一字符串，在API返回结果中包含了${token}参数。${index}为生成的从0开始编号的ts文件序号。
         * > 如果参数**MasterURI**不为空，URI地址必须处于参数**MasterURI**所在目录或它的子目录。
         * @example `oss://test-bucket/test-object/output-video`
         */
        URI: string;
        /**
         * 视频处理参数配置，空值（默认）表示禁用视频处理，输出ts文件中将不包含视频流。
         * > 同一Target内的Video和Subtitle字段互斥。如果设置了Video字段会忽略Subtile字段。
         */
        Video: any;
        /**
         * 音频处理参数配置，空值（默认）表示禁用音频处理，输出ts文件中将不包含音频流。
         * > 同一Target内的Audio和Subtitle字段互斥。如果设置了Audio字段会忽略Subtile字段。Audio和Video可以同时设置，Audio表示输出视频中的音频信息。也可以只设置Audio，只生成音频信息。
         */
        Audio: any;
        /**
         * 字幕处理参数配置。
         * > 同一Target内的Subtile和Video或Audio字段互斥，只有单独设置Subtile才能生成字幕。
         */
        Subtitle: any;
        /**
         * 触发边转边播时向前转码的ts文件数量。默认向前转码2分钟时长的视频。
         * - 示例：**Duraiton**为10，则**TranscodeAhead**默认为12。您可以指定该参数控制异步向前转码的数量，取值范围为[10,30]。
         * @example `12`
         */
        TranscodeAhead: number;
        /**
         * 单个ts文件的播放时长。单位为秒（s），默认为10，取值范围为[5,15]。
         * @example `10`
         */
        Duration: number;
        /**
         * 初始转码时长，单位为秒（s），默认值为30。
         * - 当所设置的时长为0时，不预装。
         * - 当所设置的时长小于0或超过源视频长度时，将初始转码整段视频。
         * - 当所设置的时长位于ts文件中间时，将持续转码到ts文件结束位置。
         * > 该参数主要用于加快视频初次播放的等待时间，提升播放体验。若您需要替换传统VOD业务场景则可尝试初始转码整段视频。
         * @example `30`
         */
        InitialTranscode: number;
        /**
         * 初始转码ts文件时长数组，数组长度最大为6，默认为空，与参数**Duration**独立。
         */
        InitialSegments: number[];
        /**
         * 为生成的ts文件添加OSS对象[标签](~~106678~~)。可以使用OSS标签来控制OSS文件的生命周期。
         * > 当前标签值与上一级中定义的Tags取并集作为当前Target的标签值。如有同名，取当前值。
         */
        Tags: any;
    }[];
    /**
     * 为生成的ts文件添加OSS对象[标签](~~106678~~)。可以使用标签来控制OSS文件的生命周期。
     * @example `{"key1": "value1", "key2": "value2"}`
     */
    "Tags"?: any;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
    /**
     * 当Media Playlist存在时的覆盖策略，取值范围：
     * - overwrite（默认）：覆盖已经存在的Media Playlist。
     * - skip-existing：跳过生成，保留已经存在的Media Playlist。
     * @example `overwrite`
     */
    "OverwritePolicy"?: string;
}

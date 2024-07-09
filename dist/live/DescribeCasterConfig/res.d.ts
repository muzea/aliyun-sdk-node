export interface DescribeCasterConfigResponse {
    /**
     * 自动切备播配置。`eofThres`：表示断流时间后自动切备播，单位为秒。
     * @example `{"eofThres":3}`
     */
    AutoSwitchUrgentConfig: string;
    /**
     * 开启断流自动切换备播。
     * - **true**：开启。
     * - **false**：关闭。
     * @example `true`
     */
    AutoSwitchUrgentOn: string;
    /**
     * 用户回调地址。
     * @example `http://learn.aliyundoc.com/callBackLive`
     */
    CallbackUrl: string;
    /**
     * 导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    CasterId: string;
    /**
     * 导播台名称。
     * @example `coco-caster10`
     */
    CasterName: string;
    /**
     * 是否启用Channel。 取值：
     *
     * - **0**：不启用。
     * - **1**：启用。
     * @example `1`
     */
    ChannelEnable: number;
    /**
     * 延时播放。单位：秒 。
     *
     * - **0**：禁用延时。
     * - 大于**0**：启用延时。
     *
     * @example `0`
     */
    Delay: number;
    /**
     * 主播流域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 轮播生效标志。 取值：
     *
     * - **0**：不生效 。
     * - **1**：生效。
     * @example `0`
     */
    ProgramEffect: number;
    /**
     * 轮播台名称。
     * @example `program_name`
     */
    ProgramName: string;
    /**
     * 录制配置参数为空时，表示不启用录制功能。
     */
    RecordConfig: {
        /**
         * 按需录制。取值：
         * - 0：关闭。
         * - 1：通过HTTP回调方式。
         * - 2：解析推流参数按需录制。
         * - 7：默认不录制。
         * @example `0`
         */
        OnDemand: number;
        /**
         * 存储位置。
         * @example `liveBucket****`
         */
        OssBucket: string;
        /**
         * 存储位置所在OSS节点。
         * @example `oss-cn-shanghai.aliyundoc.com`
         */
        OssEndpoint: string;
        RecordFormat: {
            /**
             * 录制格式配置。
             */
            RecordFormat: {
                /**
                 * 录制时长。
                 * @example `3600`
                 */
                CycleDuration: number;
                /**
                 * 录制格式。
                 * @example `M3U8`
                 */
                Format: string;
                /**
                 * 录制文件名。
                 * @example `record/{liveApp****}/{liveStream****}`
                 */
                OssObjectPrefix: string;
                /**
                 * 切片名称。
                 * @example `record/{liveApp****}/{liveStream****}/{UnixTimestamp****}`
                 */
                SliceOssObjectPrefix: string;
            }[];
        };
    };
    /**
     * 请求ID。
     * @example `97df6b7f-3490-47d2-ac50-8833e1b64597`
     */
    RequestId: string;
    /**
     * 用户自定义导播台旁路输出地址。
     * @example `rtmp://sophon-developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****`
     */
    SideOutputUrl: string;
    /**
     * 用户自定义导播台旁路输出地址列表。
     * @example `["rtmp://domain/app1/stream1","rtmp://domain/app2/stream2"]`
     */
    SideOutputUrlList: string;
    SyncGroupsConfig: {
        /**
         * 存储配置。
         */
        SyncGroup: {
            /**
             * 导播台资源ID。
             * @example `28768383240243****`
             */
            HostResourceId: string;
            /**
             * 静态页面缓存的模式。取值：
             * - 0： 标准模式。
             * - 1：强力模式。
             * - 2：不缓存。
             * @example `0`
             */
            Mode: number;
            ResourceIds: {
                /**
                 * 需要修改资源组的云资源的资源ID列表，资源ID数量限制为1至50。
                 */
                ResourceId: string[];
            };
        }[];
    };
    /**
     * 转码配置。
     */
    TranscodeConfig: {
        /**
         * 导播台转码模板。取值：
         * - **lp_ld**：流畅。
         * - **lp_sd**：标清。
         * - **lp_hd**：高清。
         * - **lp_ud**：超清。
         * - **lp_ld_v**：竖屏流畅。
         * - **lp_sd_v**：竖屏标清。
         * - **lp_hd_v**：竖屏高清。
         * - **lp_ud_v**：竖屏超清。
         * @example `lp_hd`
         */
        CasterTemplate: string;
        LiveTemplateIds: {
            /**
             * 直播转码配置。
             */
            LocationId: string[];
        };
    };
    /**
     * 备播图片媒资库素材ID。
     * @example `a089175eb5f4427684fc0715159a****`
     */
    UrgentImageId: string;
    /**
     * 备播图片素材URL。
     * @example `http://learn.aliyundoc.com/AppName/image.jpg`
     */
    UrgentImageUrl: string;
    /**
     * 备播直播流URL。
     * @example `rtmp://demo.aliyundoc.com`
     */
    UrgentLiveStreamUrl: string;
    /**
     * 备播视频媒资库素材ID。
     * @example `98646538-bcf9-4aef-bd4a-e6bb76588****`
     */
    UrgentMaterialId: string;
}

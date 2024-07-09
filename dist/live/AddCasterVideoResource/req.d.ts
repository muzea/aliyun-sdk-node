export interface AddCasterVideoResourceRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 视频源名称。
     * @example `test001`
     */
    "ResourceName": string;
    /**
     * 用于标识视频源位置。本参数必填。
     * 定义布局内画面的引用编号，每个位置至多关联一个资源，格式需符合“RV01~RV12”，即RV+数字，数字范围`[01~99]`。
     * @example `RV01`
     */
    "LocationId"?: string;
    /**
     * 阿里云直播流地址。
     * ><notice>当视频源类型为直播流时，本参数必填。
     * ></notice>
     * > 视频源类型不是直播流时，请求时不要带这个参数。
     * @example `rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****`
     */
    "LiveStreamUrl"?: string;
    /**
     * 流ID。
     * @example `faaa9a6b-1234-1a20-2345-874378483****`
     */
    "StreamId"?: string;
    /**
     * 媒资库素材ID。
     * ><notice>当视频源类型为素材时，本参数才可用且必须传入。
     * ></notice>
     * 如果您通过[DescribeCasterConfig接口](~~60259~~)查询导播台配置信息，请查看DescribeCasterConfig接口调用返回的参数UrgentMaterialId值。
     * > UrgentMaterialId值即为媒资库素材ID值。
     * @example `f080575eb5f4427684fc0715159a****`
     */
    "MaterialId"?: string;
    /**
     * 点播文件地址。
     * ><notice>当视频源类型为文件视频且视频文件未导入素材库时，本参数才可用。
     * ></notice>
     * >点播文件仅限MP4、FLV、TS格式。
     * @example `http://learn.aliyundoc.com/AppName/StreamName.flv`
     */
    "VodUrl"?: string;
    /**
     * 视频文件起始偏移值。单位：毫秒。
     * ><notice>当视频源类型为文件视频时，本参数才有用。
     * ></notice>
     * > 大于**0**，表示从相对于首帧的偏差时间作为开始读取的位置。
     * @example `1000`
     */
    "BeginOffset"?: number;
    /**
     * 视频文件结束偏移值。单位：毫秒。
     * ><notice>当视频源类型为文件视频时，本参数才有用。
     * ></notice>
     *
     * - 大于**0**时：从相对于首帧的偏差时间为结束读取的位置。
     * - 小于**0**时：相对于最后一帧的偏差时间作为结束读取的位置。
     * @example `10000`
     */
    "EndOffset"?: number;
    /**
     * 播放完后重复继续播放的次数。取值：
     * ><notice>当视频源类型为文件视频时，本参数才有用。
     * ></notice>
     * - **0**（默认值）：不重复播放。
     * - **-1**：一直循环重复。
     * @example `0`
     */
    "RepeatNum"?: number;
    /**
     * PTS回调间隔。单位：毫秒。
     * @example `2000`
     */
    "PtsCallbackInterval"?: number;
    /**
     * 该字段对视频进行固定延迟设置，可用于字幕同步。单位ms, 默认取值为0， 取值范围[0-5000]。
     * @example `0`
     */
    "FixedDelayDuration"?: number;
    /**
     * 媒资库图片素材ID。
     * > 当视频源类型为图片时，本参数才可用且必须传入。
     * @example `a089175eb5f4427684fc0715159a****`
     */
    "ImageId"?: string;
    /**
     * 图片素材URL。
     * >当视频源类型为图片且图片文件未导入素材库时，本参数才可用。支持上传jpg、png格式图片，最大文件不可超过10M。
     * @example `http://learn.aliyundoc.com/AppName/image.jpg`
     */
    "ImageUrl"?: string;
}

export interface ModifyCasterVideoResourceRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster](~~69338~~)接口创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 资源ID。如果您通过[AddCasterVideoResource](~~60250~~)接口添加导播台视频源，请查看AddCasterVideoResource接口调用返回的参数ResourceId值。
     * @example `05ab713c-676e-49c0-96ce-cc408da1****`
     */
    "ResourceId": string;
    /**
     * 视频源名称。
     * @example `test001`
     */
    "ResourceName"?: string;
    /**
     * 直播流地址。
     * ><notice>当视频源类型为直播流时，本参数才可用且必传。
     * ></notice>
     * @example `rtmp://guide.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****`
     */
    "LiveStreamUrl"?: string;
    /**
     * 素材ID。
     * @example `f080575eb5f4427684fc0715159a****`
     */
    "MaterialId"?: string;
    /**
     * 点播文件地址。
     * ><notice>当视频源类型为文件视频且视频文件未导入素材库时，本参数才可用。
     * ></notice>
     * >点播文件仅限MP4、FLV、TS格式。
     * @example `http://developer.aliyundoc.com/AppName/StreamName.flv`
     */
    "VodUrl"?: string;
    /**
     * 视频文件起始偏移值。单位：毫秒。
     * ><notice>当视频源类型为文件视频时，本参数才有用。
     * ></notice>
     * >大于0，表示从相对于首帧的偏差时间作为开始读取的位置。
     * @example `0`
     */
    "BeginOffset"?: number;
    /**
     * 仅对文件视频有效。单位：毫秒。
     *
     * - 大于**0**时，表示从相对于首帧的偏差时间为结束读取的位置。
     * - 小于**0**时，表示相对于最后一帧的偏差时间作为结束读取的位置。
     * @example `10000`
     */
    "EndOffset"?: number;
    /**
     * 仅对文件视频有效，表示播放完后重复继续播放的次数。
     *
     * - **0**（默认值）：表示不重复播放。
     * - **-1**：表示一直循环重复。
     * @example `0`
     */
    "RepeatNum"?: number;
    /**
     * PTS回调间隔。单位：毫秒，仅对点播素材有效。
     * @example `2000`
     */
    "PtsCallbackInterval"?: number;
    /**
     * 媒资库图片素材ID。
     * >当视频源类型为图片时，本参数才可用且必须传入。
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

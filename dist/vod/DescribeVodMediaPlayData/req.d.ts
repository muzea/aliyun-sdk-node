export interface DescribeVodMediaPlayDataRequest {
    /**
     * 播放日期，单位：天。格式为：yyyyMMdd。
     * >- 仅支持按天查询。
     * >- 仅支持查询过去30天以内的数据。
     * @example `20240322`
     */
    "PlayDate"?: string;
    /**
     * 播放器SDK的终端类型。传入此参数，可筛选查询指定终端类型的所有音视频的播放数据。取值：
     * - **Native**：Android播放器SDK或iOS播放器SDK。
     * - **Web**：Web播放器SDK。
     * @example `Native`
     */
    "TerminalType"?: string;
    /**
     * 播放端的操作系统。传入此参数，可筛选查询指定操作系统的所有音视频的播放数据。取值：
     * - **Android**
     * - **iOS**
     * - **Windows**
     * - **macOS**
     * - **Linux**
     * @example `Android`
     */
    "Os"?: string;
    /**
     * 服务地域。传入此参数，可筛选查询指定服务地域下的所有音视频的播放数据。取值：
     * - **cn-beijing**：华北2（北京）
     * - **cn-shanghai**：华东2（上海）
     * - **cn-shenzhen**：华南1（深圳）
     * - **ap-northeast-1**：日本（东京）
     * - **ap-southeast-1**：新加坡
     * - **ap-southeast-5**：印度尼西亚（雅加达）
     * - **eu-central-1**：德国（法兰克福）
     * - **ap-south-1**：印度（孟买）
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 媒体ID，即音/视频ID（VideoId）。传入此参数，可筛选查询指定媒体ID的音视频播放数据，仅支持设置一个媒体ID。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[视频点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[CreateUploadVideo](~~CreateUploadVideo~~)接口上传音/视频时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[SearchMedia](~~SearchMedia~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `9ae2af636ca6c10412f44891fc****`
     */
    "MediaId"?: string;
    /**
     * 查询数据的当前页码。传入此参数，可指定查询数据从第几页开始返回。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页显示的数据条数。传入此参数，可设置返回数据每页显示的条数。最大值为100。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 排序类型，与`OrderName`参数搭配使用。传入此参数，可设置返回数据按指定指标的升序或降序进行排列。取值：
     * - **ASC**：升序，返回的数据按从小到大向下排列。
     * - **DESC**：降序，返回的数据按从大到小向下排列。
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 指标名称，与`OrderType`参数搭配使用。传入此参数，可设置返回数据按指定指标的升序或降序进行排列。取值：
     * - **PlaySuccessVv**：播放总次数。
     * - **PlayPerVv**：人均播放次数:。
     * - **PlayDuration**：累计播放时长。
     * - **PlayDurationPerUv**：人均播放时长。
     * @example `PlaySuccessVv`
     */
    "OrderName"?: string;
}

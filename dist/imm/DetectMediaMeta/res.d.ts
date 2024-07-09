export interface DetectMediaMetaResponse {
    /**
     * 请求ID。
     * @example `2213B1A9-EB3D-4666-84E0-24980BC*****`
     */
    RequestId: string;
    /**
     * 视频中使用的语言，参考标准为ISO 639-2。
     * @example `eng`
     */
    Language: string;
    /**
     * 媒体文件标题。
     * @example `test`
     */
    Title: string;
    /**
     * 视频流数组。
     */
    VideoStreams: any[];
    /**
     * 音频流数组。
     */
    AudioStreams: any[];
    /**
     * 字幕流数组。
     */
    Subtitles: any[];
    /**
     * 媒体流数量。
     * @example `2`
     */
    StreamCount: number;
    /**
     * 节目数量。
     * @example `2`
     */
    ProgramCount: number;
    /**
     * 格式名称。
     * @example `mov,mp4,m4a,3gp,3g2,mj2`
     */
    FormatName: string;
    /**
     * 格式名称的全称。
     * @example `QuickTime / MOV`
     */
    FormatLongName: string;
    /**
     * 媒体文件大小，单位为字节。
     * @example `25115517`
     */
    Size: number;
    /**
     * 媒体的起始播放时间。
     * @example `0.000000`
     */
    StartTime: number;
    /**
     * 媒体文件的码率，单位为比特每秒（bit/s）。
     * @example `13164131`
     */
    Bitrate: number;
    /**
     * 艺术家。
     * @example `unable`
     */
    Artist: string;
    /**
     * 演唱者。
     * @example `unable`
     */
    AlbumArtist: string;
    /**
     * 作曲家。
     * @example `unable`
     */
    Composer: string;
    /**
     * 演奏者。
     * @example `unable`
     */
    Performer: string;
    /**
     * 专辑。
     * @example `unable`
     */
    Album: string;
    /**
     * 视频的总时长，单位为秒（s）。
     * @example `15.263000`
     */
    Duration: number;
    /**
     * 视频拍摄时间，参考标准为RFC3339Nano。
     * @example `2022-04-24T02:39:57Z`
     */
    ProduceTime: string;
    /**
     * 中心地理坐标点，是一个经纬度值。
     * 格式为纬度,经度，纬度在前，经度在后，且纬度范围为\[-90,+90]，经度范围为\[-180,+180]。例如35.8,-45.91。
     * @example `+120.029003,+30.283095`
     */
    LatLong: string;
    /**
     * 媒体文件中视频画面的宽度，单位为像素（px）。
     * @example `1080`
     */
    VideoWidth: number;
    /**
     * 媒体文件中视频画面的高度，单位为像素（px）。
     * @example `1920`
     */
    VideoHeight: number;
    /**
     * 视频地理位置检测结果。
     * 只有视频中包含地理位置信息时，此参数才有值。
     */
    Addresses: any[];
}

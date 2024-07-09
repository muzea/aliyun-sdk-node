export interface MonitorExaminationRequest {
    /**
     * 检测类型。
     * - 0：屏幕聊天工具检测
     * - 1：考生状态检测
     * @example `1`
     */
    "Type": number;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/MonitorExamination/1MonitorExamination1.jpg`
     */
    "ImageURL": string;
}

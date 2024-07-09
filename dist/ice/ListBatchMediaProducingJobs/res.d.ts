export interface ListBatchMediaProducingJobsResponse {
    /**
     * Id of the request
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 一键成片任务列表
     */
    EditingBatchJobList: {
        /**
         * 一键成片任务 Id
         * @example `******7ecbee4c6d9b8474498e******`
         */
        JobId: string;
        /**
         * 用户合成输出配置。
         * @example `{
          "MediaGroupArray": [{
              "MediaArray": [
                "****9d46c886b45481030f6e****",
                "****6c886b4549d481030f6e****" ]
            }, {
              "MediaArray": [
                "****d46c886810b454930f6e****",
                "****4549d886810b46c30f6e****" ]
          }],
          "TitleArray": [
              "回龙观盒马鲜生开业啦"],
          "SpeechTextArray": [
              "附近的商场新开了一家盒马鲜生，今天是第一天开业"]
        }`
         */
        InputConfig: string;
        /**
         * 剪辑相关配置。具体结构定义，请参见[EditingConfig](~~2692547#1be9bba03b7qu~~)配置说明。
         * @example `{
          "MediaConfig": {
              "Volume": 0
          },
          "SpeechConfig": {
              "Volume": 1
          },
         "BackgroundMusicConfig": {
              "Volume": 0.3
          }
        }`
         */
        EditingConfig: string;
        /**
         * 输出配置。具体结构定义，请参见[OutputConfig](~~2692547#447b928fcbuoa~~)配置说明。
         * @example `{
          "MediaURL": "http://xxx.oss-cn-shanghai.aliyuncs.com/xxx_{index}.mp4",
          "Count": 20,
          "MaxDuration": 15,
          "Width": 1080,
          "Height": 1920,
          "Video": {"Crf": 27}
        }`
         */
        OutputConfig: string;
        /**
         * 任务状态。
         * @example `Finished`
         */
        Status: string;
        /**
         * 自定义设置，Json 格式，长度限制为 512 字节。支持[自定义回调地址配置](https://help.aliyun.com/zh/ims/use-cases/to-configure-a-callback-when-a-clip-completes)。
         * @example `{"NotifyAddress":"http://xx.xx.xxx"}或{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
         */
        UserData: string;
        /**
         * 任务扩展信息
         * @example `{}`
         */
        Extend: string;
        /**
         * 创建时间，UTC 时间格式
         * @example `2023-06-09T06:36:48Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2023-06-09T06:37:58Z`
         */
        ModifiedTime: string;
        /**
         * 完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2023-06-09T06:38:09Z
        `
         */
        CompleteTime: string;
        /**
         * 任务类型
         * @example `Script`
         */
        JobType: string;
    }[];
    /**
     * 下一次查询的开始Token。
     * @example `8EqYpQbZ6Eh7+Zz8DxVYoQ==`
     */
    NextToken: string;
    /**
     * 分页大小。最大不超过100。
     * 默认值：10
     * @example `100`
     */
    MaxResults: number;
}

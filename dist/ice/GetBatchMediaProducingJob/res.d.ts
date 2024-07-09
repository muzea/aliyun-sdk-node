export interface GetBatchMediaProducingJobResponse {
    /**
     * 请求ID
     * @example `****36-3C1E-4417-BDB2-1E034F****`
     */
    RequestId: string;
    /**
     * 批量智能一键成片任务信息
     */
    EditingBatchJob: {
        /**
         * 任务ID
         * @example `****b6b2750d4308892ac3330238****`
         */
        JobId: string;
        /**
         * 用户合成输出配置。具体结构定义，请参见[InputConfig](~~2692547#2faed1559549n~~)配置说明。
         * @example `{
          "MediaGroupArray": [{
              "GroupName": "MediaGroup1",
              "MediaArray": [
                "****9d46c886b45481030f6e****",
                "****6c886b4549d481030f6e****" ]
            }, {
              "GroupName": "MediaGroup2",
              "MediaArray": [
                "****d46c886810b454930f6e****",
                "****4549d886810b46c30f6e****" ]
          }],
          "TitleArray": [
              "回龙观盒马鲜生开业啦",
              "盒马鲜生开业啦" ],
          "SpeechTextArray": [
              "附近的商场新开了一家盒马鲜生，今天是第一天开业"
              "商场里的人不少，零食、酒水都比较便宜大家也快来看看呀" ]
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
         * 任务状态。取值范围：
         * \- Init：初始化
         * \- Processing：处理中
         * \- Finished: 处理完成
         * @example `Finished`
         */
        Status: string;
        /**
         * 用户业务配置、回调配置。具体结构定义，请参见[UserData](https://help.aliyun.com/document_detail/357745.html?spm=a2c4g.439285.0.i1#section-urj-v3f-0s1)配置说明。
         * @example `{"NotifyAddress":"http://xx.xx.xxx"}`
         */
        UserData: string;
        /**
         * 扩展信息。字段详情：
         * \- ErrorCode: 主任务错误码
         * \- ErrorMessage: 主任务错误信息
         * @example `{
            "ErrorCode": "InvalidMaterial.NotFound",
            "ErrorMessage": "The specified clips id not found:[\"****30d0b5e871eebb2ff7f6c75a****\"]"
        }`
         */
        Extend: string;
        CreateTime: string;
        ModifiedTime: string;
        CompleteTime: string;
        JobType: string;
        /**
         * 一键成片子任务列表
         */
        SubJobList: {
            /**
             * 成片媒资ID。
             * @example `****1470b11171ee9d19e7e6c66a****`
             */
            MediaId: string;
            /**
             * 子任务 ID。
             * @example `****8e81933d44e3ae69e2f81485****`
             */
            JobId: string;
            /**
             * 输出成片的文件地址
             * @example `http:/xxx.oss-cn-shanghai.aliyuncs.com/xxx_0.mp4`
             */
            MediaURL: string;
            /**
             * 子任务状态。取值范围：
             * \- Init：初始化
             * \- Processing：处理中
             * \- Success：成功
             * \- Failed： 失败
             * @example `Success`
             */
            Status: string;
            /**
             * 失败时错误码。如果执行成功则不返回此参数。
             * @example `InvalidMaterial.NotFound`
             */
            ErrorCode: string;
            /**
             * 失败时错误信息。如成功则不返回此参数。
             * @example `The specified clips id not found:["****30d0b5e871eebb2ff7f6c75a****"]`
             */
            ErrorMessage: string;
        }[];
    };
}

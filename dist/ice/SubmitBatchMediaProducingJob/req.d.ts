export interface SubmitBatchMediaProducingJobRequest {
    /**
     * 调用方保证请求幂等性Client Token
     * @example `****12e8864746a0a398****
    `
     */
    "ClientToken"?: string;
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
    "InputConfig"?: string;
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
    "EditingConfig"?: string;
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
    "OutputConfig"?: string;
    /**
     * 用户业务配置、回调配置。具体结构定义，请参见[UserData配置说明](https://help.aliyun.com/document_detail/357745.html?spm=a2c4g.439285.0.i1#section-urj-v3f-0s1)。
     * @example `{"NotifyAddress":"http://xx.xx.xxx"}或{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
}

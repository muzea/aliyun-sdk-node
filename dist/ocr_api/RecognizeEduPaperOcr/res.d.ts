export interface RecognizeEduPaperOcrResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"√技能提升练 √拓展创新练 12.对于同一平面内的三条直线,给出下列5个论断: 15.「2018春·如皋期末]在一个","figure":[{"type":"subject_pattern","x":1605,"y":3087,"w":645,"h":804,"box":{"x":0,"y":0,"w":0,"h":0,"angle":0},"points":[{"x":1605,"y":3087},{"x":2250,"y":3087},{"x":2250,"y":3891},{"x":1605,"y":3891}]}],"height":7000,"orgHeight":7000,"orgWidth":4716,"prism_version":"1.0.9","prism_wnum":64,"prism_wordsInfo":[{"angle":0,"direction":0,"height":85,"pos":[{"x":207,"y":508},{"x":826,"y":506},{"x":826,"y":592},{"x":208,"y":594}],"prob":96,"recClassify":0,"width":618,"word":"√技能提升练","x":207,"y":506}],"width":4716}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}

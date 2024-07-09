export interface RecognizeKoreanResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"위 기자재는 [전파법] 제58조의2 제3항에 따라 등록되었음을 증명합니다.  Itis verified thatforegoing equipment has bee en registered underthe Clause 3, Article 58-2 of Radio Waves Act.  y0 13년(Year)_08월(Month) 16일(Date) 국립전 파연구 국립전파연7 구원장 인 Dlrector General ofNatlonal Radio Research Agency    적합등록 방송통신기자재는 반드시\"적합성평가표: .시\"를 부착하여 유통하여야 합니다.  위반시 과태료 처분 및등록이 취소될 수 있습니다.  ","height":499,"orgHeight":499,"orgWidth":1153,"prism_version":"1.0.9","prism_wnum":19,"prism_wordsInfo":[{"angle":-90,"direction":0,"height":587,"pos":[{"x":61,"y":18},{"x":647,"y":16},{"x":647,"y":43},{"x":61,"y":45}],"prob":98,"width":27,"word":"위 기자재는 [전파법] 제58조의2 제3항에 따라","x":341,"y":-263}],"width":1153}`
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

export interface RecognizeEduQuestionOcrResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{
          "content": "√技能提升练 √拓展创新练 12.对于同一平面内的三条直线，给出下列5个论断：15.「2018春·如皋期末]在一个三角形中,如果一个角 ①a//b;②b∥c;③a⊥b;④a∥c;⑤a⊥c ,以其中两是另一个角的3倍,这样的三角形我们称之为“智个论断为条件,一个论断为结论,组成一个你认为慧三角形”.如三个内角分别为 1 2 0 ^ { \\circ } , 4 0 ^ { \\circ } , 2 0 ^ { \\circ } 的三角正确的命题. 形是“智慧三角形”. 已知:,结论: 如图 1 - 2 - 2 , \\angle M O N = 6 0 ^ { \\circ } , 在射线OM上找一点 13.指出命题“同旁内角互补”的条件和结论,并说明这 A,过点A作 AB⊥OM 交ON于点B,以A为端点个命题是正确的命题还是错误的命题. 作射线AD 交射线OB于点C(点C不与点O重合). M A B N 图 1- -2一2 14.如图 1-2-1, 点B,A,E在同一条直线上,已知①AD (1) ∠ABC 的度数为°, △AOB ∥BC,②∠B=∠C,③AD 平分 ∠EAC. 请你用其中两(填“是”或“不是”)智慧三角形; 个作为条件,另一个作为结论,构造命题,并说明你构 (2)若 \\angle O A C = 2 0 ^ { \\circ } ，试说明:：△AOC 为"智慧三角形的命题是正确的命题还是错误的命题. 形”; E D B C 图 1-2-1 (3)当 △ABC 为“智慧三角形”时,求 ∠OAC 的度数. 第1章三角形的初步知识A5 ",
          "figure": [
                {
                      "type": "subject_pattern",
                      "x": 1605,
                      "y": 3087,
                      "w": 645,
                      "h": 804,
                      "box": {
                            "x": 0,
                            "y": 0,
                            "w": 0,
                            "h": 0,
                            "angle": 0
                      },
                      "points": [
                            {
                                  "x": 1605,
                                  "y": 3087
                            },
                            {
                                  "x": 2250,
                                  "y": 3087
                            },
                            {
                                  "x": 2250,
                                  "y": 3891
                            },
                            {
                                  "x": 1605,
                                  "y": 3891
                            }
                      ]
                }
          ],
          "height": 7000,
          "orgHeight": 7000,
          "orgWidth": 4716,
          "prism_version": "1.0.9",
          "prism_wnum": 64,
          "prism_wordsInfo": [
                {
                      "angle": 0,
                      "direction": 0,
                      "height": 85,
                      "pos": [
                            {
                                  "x": 207,
                                  "y": 508
                            },
                            {
                                  "x": 826,
                                  "y": 506
                            },
                            {
                                  "x": 826,
                                  "y": 592
                            },
                            {
                                  "x": 208,
                                  "y": 594
                            }
                      ],
                      "prob": 96,
                      "recClassify": 0,
                      "width": 618,
                      "word": "√技能提升练",
                      "x": 207,
                      "y": 506
                }
          ],
          "width": 4716
    }`
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

import Search from "../viewmodel/Search";

export default class MicroAnswerService {

  public static async SearchMicroAnswer(searchWord: string): Promise<Search> {
    console.log(process.env.MICROANSWER_KEY);
    const response = await fetch('https://api.m3o.com/v1/answer/Question', {
      // learn more about this API here: https://m3o.com/answer
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'Authorization': "Bearer " + process.env.MICROANSWER_KEY
      },
      body: JSON.stringify({
        query: searchWord,
      }),
    });
    return response.json();
  }
}

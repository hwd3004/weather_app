#0.2 Expo vs RN CLI

npm install -g expo-cli

expo는 기본적으로 create-react-app 같은 것.
리액트 네이티브를 위한 설정 파일같은 것들이 없는 방식으로, 모든 것이 셋업이 되어있음.
만약에 리액트 네이티브를 수동으로 작업하고 싶다면, react native cli를 이용해야하고 복잡함.

expo는 모든 native 파일들을 숨기고, 모든 걸 관리해줌.
가장 큰 장점은, 폰에서 앱을 테스트할 수 있음.
단점은 native 파일들을 크게 제어할 수 없음.

https://docs.expo.io/versions/v38.0.0/sdk/payments/
expo가 지원하는 api의 종류들이 매우 많음.
payments, BarCodeScanner, Brightness 등등.

리액트 네이티브는 이 모든걸 지원안함.
expo는 수동적인 작업들이 덜 필요하고, 시작하는데 훨씬 더 빠른 방식임.
native 파일에 접근 권한이 없어서 한계가 있긴 하지만,
native 파일을 이용할 일이 잘 없음.
기업의 경우에는 분석 작업을 위해서 필요할 수 있지만,
인스타그램 앱, 우버 앱을 만들때도 필요하지않음.

----------------------------------------------------------------------------------------------------------------------

#0.3 Creating the Project
expo로 프로젝트를 시작하려면, 터미널로 원하는 경로로 가서
expo init [프로젝트명]



에러발생
expo : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\hwd30\AppData\Roaming\npm\expo.ps1
파일을 로드할 수 없습니다.
자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=135170)를 참조하십시오.

https://singa-korean.tistory.com/21
해결법




expo init [프로젝트명] 하면 질문이 뜨는데, expo가 자동생성을 할 수 있기때문임.
제로부터 시작할 것이기때문에, blank를 선택.

스크린들을 이미 가지고 있는 앱을 가졌을 때, 그건 탭들을 가지게 될거고, 그럼 tabs를 선택.
만약 경험자라면 TypeScript를 선택.

설치가 생각보다 오래 걸림.


설치 완료 후 npm start를 해보면, 자동으로 expo developer tools를 오픈함.
qr코드가 있는데, 폰으로 expo로 가서, 스캔 qr을 하면,
expo 앱이 폰에서 프로젝트를 열고, 앱을 폰에서 테스트해볼 수 있음.
ios는 expo 로그인한 다음에, vscode 터미널에서 expo login 입력.
폰으로 테스트하려면 Run on Android, Run on iOS 하면 됨.


----------------------------------------------------------------------------------------------------------------------

#0.4 Getting to know Expo

live reloading, hot reloading

저장하면 바로 즉시 expo가 전체 어플리케이션을 리로드함.
splash 스크린이 잠깐 보이고, 어플리케이션이 나타남.
이것을 라이브 리로딩이라 함.

안드로이드 시뮬레이터 프로그램에서 ctrl + m 하면 개발자 메뉴가 나타남.
expo 앱으로 테스트 중인 폰을 흔들면 개발자 메뉴가 나타남.

element inspector로 가면, width, height 등을 볼 수 있음.

debug remote js는 애플리케이션 디버그를 도와줌.
google developer tools를 이용해서 앱의 로그를 볼 수 있음.
대신 앱이 무거워지므로 필요한 경우에만 쓰는게 좋음.


----------------------------------------------------------------------------------------------------------------------

#0.5 How does React Native Work?

ios랑 안드로이드에서 리액트가 어떻게 작동하는 것인지,
모바일앱을 만드는 3가지 다른 방법들.

1. 완전 native
Swift 또는 objective-c로 ios 앱을 만드는 것.
java 또는 코틀린으로 안드로이드 앱을 만드는 것.
프로그래밍 언어도 다르고, 매우 다름.
하나는 xcode, 하나는 안드로이드 스튜디오.
이게 네이티브 방식.

2. 앱 기반 웹뷰를 만드는 것
매우 간단한 앱을 만들고,
예를 들어 Cordova 또는 PhoneGap 이용해서,
그리고 그 안에 그냥 HTML, CSS를 넣는것.
앱스토어에 등록된 이것들은, 유저가 앱을 실행할때
html, css, js로 된 것들을 마치 웹사이트인 것처럼 보여줌.
이 방식은 native쪽에 많은 예산이 없는 회사들이 사용함.
그치만 이미 훌륭한 반응현 웹사이트들을 가지고 있고,
몇개의 네이티브 기능들이 필요할 때(알림 푸쉬 같은 것들),
그냥 전체 웹사이트를 앱 안에다 넣음.
그래서 유저가 앱을 오픈했을 때, 반응형 웹사이트를 볼 수 있는 것.

3. 리액트 네이티브
안드로이드, ios 둘 다 자바스크립트 엔진을 가지고 있음.
자바스크립트를 웹 사이트에서 실행하고,
크롬, 사파리, ios, 안드로이드 등등
리액트 네이티브는 자바스크립트를 이용해서
ios 또는 안드로이드의 네이티브 엔진에게 메세지를 보냄.
연결을 이어주는 브릿지같은 역할.


리액트 컴포넌트 App.js에서

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello~?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

여기서 View와 Text가 브릿지임.
자바스크립트와 안드로이드, ios의 네이티브 텍스트, 뷰를 이어줌.

자바스크립트와 폰 사이의 브릿지 역할을 수행하기 위해서,
느린 성능을 유발함.
브릿지로 많은 데이터를 보내면, 브릿지에 교통체증처럼 부하가 걸림.
그래서 리액트 네이티브는 어플리케이션 만들기에는 매우 좋음.
컨텐츠만 다루는 것들, 예를 들어 인스타그램처럼 사진 가져오는 것은 매우 쉽고,
좋아요 누르고 코멘트 작성하고, 삭제하고, 프로필 업뎃하고, 이런 것들이나,
데이팅 앱 같은 것들은 리액트 네이티브로 만드는 것은 매우 쉽다.

하지만 만약에 3d 비디오 게임 같은 것들을 만든다면 리액트 네이티브는 좋은 선택이 아님.
브릿지가 느려지지않도록 코드를 최적화하는데 많은 시간을 써야하는데,
비디오 게임 코드를 작성하거나, 폰 카메라를 이용한 3d 증강 현실 앱을 작성하길 원하는 경우에는,
리액트 네이티브는 그런 것들을 목적으로 만들어진 게 아니므로 좋은 선택이 아님.

자바스크립트와 폰의 코드 사이의 커뮤니케이션을 쉽게 하려고 만들어진 것이므로.




컴포넌트에 대한 것으로는,
리액트 네이티브, 아이폰, 안드로이드에서는 모든게 view임.
<View>는 <div>같은 것. 전부 다 view고, view 안에 모든걸 집어넣어야함.
리액트 네이티브의 경우에는 다른 규칙들이 있음.
예를 들어 웹사이트는 텍스트를 넣을대 <span>을 쓰는데,
리액트 네이티브는 <Text>를 씀.
이런 규칙이 존재하는 이유는 브릿지때문.



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

리액트 네이티브가 css 엔진을 구현함.
차이점은 자바스크립트 오브젝트처럼 써야하나, 컨셉은 같음.
몇가지 예외경우가 있고, 작동하진 않음.

----------------------------------------------------------------------------------------------------------------------

#1.0 Layouts with Flexbox in React Native

리액트 네이티브에서 레이아웃에 대한 규칙들.

expo에 관한게 아닌, 모든 것에 적용되는 리액트 네이티브에 관한 것.

리액트 네이티브에서 모든 flex의 디폴트는 flexDirection이 column임.
왜냐면 모바일폰에서는 대게 모든게 서로 아래에 있기 때문.

----------------------------------------------------------------------------------------------------------------------

#1.1 Loading Screen

paddingHorizontal: 30,
paddingVertical: 100

리액트 네이티브에서만 쓰는 css

fontSize: 20
fontSize: '20px'

fontSize는 px까지 쓰려면 따옴표 써야하고, 아니면 그냥 숫자만 쓰면 됨.

----------------------------------------------------------------------------------------------------------------------

#1.2 Getting the Location

https://docs.expo.io/versions/latest/sdk/location/

npm install expo-location

----------------------------------------------------------------------------------------------------------------------

#1.3 Asking for Permissions

----------------------------------------------------------------------------------------------------------------------

#1.4 Getting the Weather

날씨 데이터를 가져올 api, 회원가입 필요
https://home.openweathermap.org/api_keys

npm install axios

----------------------------------------------------------------------------------------------------------------------

#1.5 Displaying Temperature

Examples of API calls:
standard api.openweathermap.org/data/2.5/find?q=London

metric api.openweathermap.org/data/2.5/find?q=London&units=metric

imperial api.openweathermap.org/data/2.5/find?q=London&units=imperial


metric은 섭씨




npm install prop-types

설치 중 에러가 발생하며 설치가 취소되었음.
해결법 - Delete your node_modules and run 'npm i' again.
이대로 하지않고, 다시 설치 시도했는데 잘 설치됨.

----------------------------------------------------------------------------------------------------------------------

#2.1 Getting the Condition Names

https://openweathermap.org/weather-conditions

Weather condition codes 참고


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds'
    ]).isRequired
}

----------------------------------------------------------------------------------------------------------------------

#2.2 Icons and Styling

https://docs.expo.io/guides/icons/

@expo/vector-icons directory 으로 가면
아이콘을 제공함.

----------------------------------------------------------------------------------------------------------------------

#2.3 Background Gradient

https://docs.expo.io/versions/latest/sdk/linear-gradient/

expo linear gradient

터미널에
expo install expo-linear-gradient



https://uigradients.com/

그라디언트 참고




Q.
Liufeier Today at 10:06 AM
리액트 네이티브 날씨앱 만들기 2.3 Background Gradient 파트에서
name={weatherOptions[condition].iconName} 이런 코드 작성을 어떻게 생각해내는거죠
영상 보기 전에 먼저 <MaterialCommunityIcons name={weatherOptions.Clear.iconName} 이렇게 해봤더니
맑음 아이콘 뜨길래 name={weatherOptions.condition.iconName} 하면 어떻게 되나 봤더니 안되네요.
자바스크립트 실력이 부족해서 그런걸까요 후...
white_check_mark
eyes
raised_hands




20 replies

scKwon  24 minutes ago
만들어놓은 weatherOptions 객체를 참조하는 방식이에요. 그 객체안에 condition 이라는 요소가 없으므로, 안되요
white_check_mark
eyes
raised_hands




scKwon  23 minutes ago
객체안에는 Clear, Snow, Rain 등을 넣을꺼니까, weatherOptions.Clear 는 되요 (edited) 
white_check_mark
eyes
raised_hands




Liufeier  18 minutes ago
배열로 참조하니깐 weatherOptions 객체선언때도 배열로 해야할거같은데 그게 아니니... 어렵네요
white_check_mark
eyes
raised_hands




Liufeier  14 minutes ago
Weather 컴포넌트의 인자값 condition을 받아올때 날씨이름으로 받아오니 될줄 알았는디...
white_check_mark
eyes
raised_hands




김맥북:react:  13 minutes ago
그래서  weatherOptions[condition] 이렇게 쓰는거에요
white_check_mark
eyes
raised_hands




김맥북:react:  13 minutes ago
weatherOptions.Clear = weatherOptions["Clear"]
white_check_mark
eyes
raised_hands




김맥북:react:  13 minutes ago
condition 안에는 프로퍼티의 이름이 string으로 들어가 있어서
white_check_mark
eyes
raised_hands




scKwon  12 minutes ago
객체를 배열로 접근한다라고 생각하시기 보단, 자바스크립트에서 객체는 . 연산자와 [] 연산자 두 개를 통해 접근할 수 있다라 생각하시는게 좋을같네요
white_check_mark
eyes
raised_hands




scKwon  12 minutes ago
아 weatherOptions.condition => weatherOptions."Clear" 로 변활 될거라고 생각하셨다는 뜻이신감
white_check_mark
eyes
raised_hands




Liufeier  11 minutes ago
네
white_check_mark
eyes
raised_hands




scKwon  11 minutes ago
. 연산자는 전자의 요소 "안" 이라는 뜻이에요. 변수가 치환되지 않아요
white_check_mark
eyes
raised_hands




Liufeier  10 minutes ago
변수 치환되는 방법으로 그럼 배열 말곤 없는건가요?
white_check_mark
eyes
raised_hands




김맥북:react:  10 minutes ago
네
white_check_mark
eyes
raised_hands




Liufeier  10 minutes ago
허...
white_check_mark
eyes
raised_hands




김맥북:react:  10 minutes ago
배열은 아닙니다
white_check_mark
eyes
raised_hands




김맥북:react:  9 minutes ago
표현 방법이 배열이랑 같을 뿐
white_check_mark
eyes
raised_hands




김맥북:react:  9 minutes ago
배열이라고 표현하는 건 혼란만..
white_check_mark
eyes
raised_hands




Liufeier  9 minutes ago
그렇군요
white_check_mark
eyes
raised_hands




scKwon  8 minutes ago
[] 연산자라고 이해하세용. 배열보단
white_check_mark
eyes
raised_hands




Liufeier  2 minutes ago
답변 감사합니다.

----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
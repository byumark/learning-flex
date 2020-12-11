import Head from 'next/head'

const BoxItem = ({ text, width = '50px', height = '50px' }) => (
  <div
    style={{
      width,
      height,
      backgroundColor: 'red',
      margin: '3px',
    }}
  >
    {text}
  </div>
)

const FlexContainer = ({
  width,
  height,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  children,
}) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: 'lightgray',
      width,
      height,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
    }}
  >
    {children}
  </div>
)

const FlexDirection = () => (
  <div>
    <h4>flex-direction</h4>
    <p>row</p>
    <FlexContainer>
      <BoxItem text="1" />
      <BoxItem text="2" />
      <BoxItem text="3" />
    </FlexContainer>
    <p>row-reverse</p>
    <FlexContainer flexDirection="row-reverse">
      <BoxItem text="1" />
      <BoxItem text="2" />
      <BoxItem text="3" />
    </FlexContainer>
    <p>column</p>
    <FlexContainer flexDirection="column">
      <BoxItem text="1" />
      <BoxItem text="2" />
      <BoxItem text="3" />
    </FlexContainer>
    <p>column-reverse</p>
    <FlexContainer flexDirection="column-reverse">
      <BoxItem text="1" />
      <BoxItem text="2" />
      <BoxItem text="3" />
    </FlexContainer>
  </div>
)

const FlexWrap = () => (
  <div>
    <h4>flex-wrap</h4>
    <p>nowrap</p>
    <FlexContainer>
      <BoxItem text="1 width=250px" width="250px" />
      <BoxItem text="2 width=250px" width="250px" />
      <BoxItem text="3 width=250px" width="250px" />
      <BoxItem text="4 width=250px" width="250px" />
      <BoxItem text="5 width=250px" width="250px" />
    </FlexContainer>
    <p>wrap</p>
    <FlexContainer flexWrap="wrap">
      <BoxItem text="1 width=250px" width="250px" />
      <BoxItem text="2 width=250px" width="250px" />
      <BoxItem text="3 width=250px" width="250px" />
      <BoxItem text="4 width=250px" width="250px" />
      <BoxItem text="5 width=250px" width="250px" />
    </FlexContainer>
    <p>wrap-reverse</p>
    <FlexContainer flexWrap="wrap-reverse">
      <BoxItem text="1 width=250px" width="250px" />
      <BoxItem text="2 width=250px" width="250px" />
      <BoxItem text="3 width=250px" width="250px" />
      <BoxItem text="4 width=250px" width="250px" />
      <BoxItem text="5 width=250px" width="250px" />
    </FlexContainer>
  </div>
)

const JustifyContent = () => (
  <div>
    <h4>justify-content</h4>
    <p>flex-start</p>
    <FlexContainer>
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
    <p>flex-end</p>
    <FlexContainer justifyContent="flex-end">
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
    <p>center</p>
    <FlexContainer justifyContent="center">
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
    <p>space-between</p>
    <FlexContainer justifyContent="space-between">
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
    <p>space-around</p>
    <FlexContainer justifyContent="space-around">
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
    <p>space-evenly</p>
    <FlexContainer justifyContent="space-evenly">
      <BoxItem width="100px" />
      <BoxItem width="50px" />
      <BoxItem width="100px" />
    </FlexContainer>
  </div>
)

const AlignItems = () => (
  <div>
    <h4>align-items</h4>
    <p>stretch</p>
    <FlexContainer height="300px" alignItems="stretch">
      <BoxItem width="250px" />
      <BoxItem width="250px" />
      <BoxItem width="250px" />
      <BoxItem width="250px" />
    </FlexContainer>
    <p>flex-start</p>
    <FlexContainer height="300px" alignItems="flex-start">
      <BoxItem width="250px" height="150px" />
      <BoxItem width="250px" height="200px" />
      <BoxItem width="250px" height="100px" />
      <BoxItem width="250px" height="150px" />
    </FlexContainer>
    <p>flex-end</p>
    <FlexContainer height="300px" alignItems="flex-end">
      <BoxItem width="250px" height="150px" />
      <BoxItem width="250px" height="200px" />
      <BoxItem width="250px" height="100px" />
      <BoxItem width="250px" height="150px" />
    </FlexContainer>
    <p>center</p>
    <FlexContainer height="300px" alignItems="center">
      <BoxItem width="250px" height="150px" />
      <BoxItem width="250px" height="200px" />
      <BoxItem width="250px" height="100px" />
      <BoxItem width="250px" height="150px" />
    </FlexContainer>
    <p>baseline</p>
    <FlexContainer height="300px" alignItems="baseline">
      <BoxItem width="250px" height="150px" />
      <BoxItem width="250px" height="200px" />
      <BoxItem width="250px" height="100px" />
      <BoxItem width="250px" height="150px" />
    </FlexContainer>
  </div>
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning Flex</title>
      </Head>
      <h2>Properties for the Parent (flex container)</h2>
      <FlexDirection />
      <br />
      <FlexWrap />
      <br />
      <JustifyContent />
      <br />
      <AlignItems />
    </div>
  )
}

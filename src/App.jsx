import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fe-dev-diploma/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains/" element={<SelectionTrain />} />
          <Route path="seats/:id" element={<SelectionWagons />} />
          <Route path="passengers/:id/" element={<PassengersInfo />} />
          <Route path="personal_information/:id/" element={<PersonalData />} />
          <Route path="screening/:id/" element={<Screening />} />
          <Route path="order-result/:id/" element={<OrderResult/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

